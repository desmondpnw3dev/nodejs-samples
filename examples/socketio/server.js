/**
 * @file server.js
 * @description NodeJS Samples - Socket IO Server
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
 * Start The Server
 */
http.listen(port, () => console.log('server listening on port ' + port));

require('./lib/chatroom')({io}); // init chatroom services
