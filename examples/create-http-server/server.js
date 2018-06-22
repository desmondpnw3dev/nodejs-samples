/**
 * @file server.js
 * @description NodeJS Samples - Simple HTTP Server
 * @author Desmond G. Jones <desmond@pnw3dev.com>
 */

/**
 * DEPENDENCIES
 */
const http = require('http');
const port = process.env.PORT || 3000;

//create a server object:
const server = http.createServer((req, res) => {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});
server.listen(port,() => {
  console.log(`Server running at port:${port}/`);
});
