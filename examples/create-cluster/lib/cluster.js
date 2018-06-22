'use strict';

/**
 * Module dependencies.
 */
const debug = require('debug')('express:server');
const http = require('http');
const numCPUs = require('os').cpus().length;


/**
 * startServer - description
 *
 * @param  {constructor} app                                           express app instances
 * @param  {integer} { port = 8002                                     server port number
 * @param  {string} appname = 'Express Cluster Config Service Module'  app name for logging statement
 * @param  {boolean} isCluster = false                                 enable cluster (defaults to false)
 * @param  {boolean|function} masterfn = false                         callback fn to be ran by the master process
 * @param  {number} jobInterval = 1000 * 60 * 60 }                     job interval occurence
 * @return {undefined}
 */
function startServer(app,{ port = 8002, appname = 'Express Cluster Config Service Module',isCluster = false, masterfn = false,jobInterval = 1000 * 60 * 60 }) {
    const cluster = require('cluster');
    // console.log('JOB INTERVALS',jobInterval);
    port ? port = port : port = process.env.PORT;
    /**
     * Get port from environment and store in Express.
     */
     port = normalizePort(process.env.PORT || port || 8002);
    app.set('port', port);

    /**
     * Create HTTP server.
     */

    const server = http.createServer(app);

    let workers = [];

    function masterProcess() {
        log(`Master Process ${process.pid} is running`);
        if (masterfn) {
            const cronjob = function cronJob() {
                console.log(`${process.pid} is running cronJob task!`);
                function done() {
                    setTimeout(() => {
                        cronJob()
                    },jobInterval);
                };
                // SCHEDULE JOBS FOR MASTER ONLY
                // USE TIMEOUTS INSTEAD OF INTERVALS TO PREVENT DUPES
                masterfn().then(resp => {
                    console.log(process.pid);
                    done(); // restart the cron job
                }).catch(err => console.error(err),done());
            }
            server.on('listening', cronjob);
        }

      // SET isCluster to true to enable node process workers
      if (isCluster) {
          // SPAWN WORKER(S) PER EACH CPU
          for (let i = 0; i < numCPUs; i++) {
            log(`Forking worker number #${i}`);
            // cluster.settings.silent = true; // disables stdout/stderr logs for workers
            const worker = cluster.fork({silent:true});
            workers.push(worker);
            log(`Starting worker pid: ${workers[i].process.pid}`);

            // Listen for messages from worker
            worker.on('message', (message) => log(`Master ${process.pid} recevies message '${JSON.stringify(message)}' from worker ${worker.process.pid}`));
          }
      }

      // Send message to the workers
      // workers.forEach(worker => {
        // console.log(`Master ${process.pid} sends message to worker ${worker.process.pid}...`);
        // worker.send({ msg: `Message from master ${process.pid}` });
      // }, this);
      // process.exit();
      // MASTER PROCESS IS REQUIED TO START LISTENING
      server.listen(port);
      server.on('error', onError);
      server.on('listening', onListening);
    }

    function childProcess() {
        log(`Worker ${process.pid} started`);

        process.on('message', (message) => log(`Worker ${process.pid} recevies message '${JSON.stringify(message)}'`));

        // log(`Worker ${process.pid} sends message to master...`);
        // process.send({ msg: `Message from worker ${process.pid}` });
        // log(`Worker ${process.pid} finished`);
    }


    /**
     * normalizePort - Normalize a port into a number, string, or false.
     *
     * @param  {integer} val port
     * @return {boolean|integer}
     */
    function normalizePort(val) {
      var port = parseInt(val, 10);
      if (isNaN(port)) {
        // named pipe
        return val;
      }
      if (port >= 0) {
        // port number
        return port;
      }
      return false;
    }

    /**
     * onError - Event listener for HTTP server "error" event.
     *
     * @param  {object} error error object
     * @return {object|function}
     */
    function onError(error) {
      if (error.syscall !== 'listen') {
        throw error;
      }
      var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    }

    /**
     * Event listener for HTTP server "listening" event.
     */
    function onListening() {
      var addr = server.address();
      var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
      debug('Listening on ' + bind);
      if (cluster.isMaster) {
          console.log(appname +' Ready on Port:' + port);
      }
    }
    function log(msg) { console.info(msg); };


    if (cluster.isMaster) {
      masterProcess();
    } else {
      childProcess();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log('worker %d died (%s). restarting...',
        worker.process.pid, signal || code);
        cluster.fork();
    });
}

exports.startServer = startServer;
