/**
 * @file server.js
 * @description NodeJS Samples - FS Server
 * @author Desmond G. Jones <desmond@pnw3dev.com>
 */

/**
 * DEPENDENCIES
 */
const app = require('express')();
const port = process.env.PORT || 3000;
const fs = require('fs');

// import modules
require('./lib/fs-write')({fs});
require('./lib/fs-read')({fs});

//start the server:
app.listen(port,() => {
  console.log(`FS Server running on port:${port}`);
});

module.exports = app;
