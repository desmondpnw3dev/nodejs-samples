/**
 * @file index.js
 * @description NodeJS Samples - Socket IO Server (Webpack Server Build)
 * @author Desmond G. Jones <desmond@pnw3dev.com>
 */

/**
 * DEPENDENCIES
 */
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

/**
 * Serve Public Client Assets
 */
app.use(express.static(__dirname + '/public'));

/**
 * @name onConnect - event listeners methods
 * @param  {object} socket
 * @return {undefined}
 */
function onConnect(socket){
  console.log('connect ' + socket.id);
  socket.on('test', (data) => socket.broadcast.emit('test', data));
  socket.on('disconnect', () => console.log('disconnect ' + socket.id));
}

/**
 * Init Socket Event Listeners
 */
io.on('connect', onConnect);

/**
 * Start The Server
 */
server.listen(port, () => console.log('server listening on port ' + port));
