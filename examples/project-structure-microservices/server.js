/**
 * @file server.js
 * @description NodeJS Samples - Server
 * @author Desmond G. Jones <desmond@pnw3dev.com>
 */

/**
 * DEPENDENCIES
 */
const app = require('express')();
const port = process.env.PORT || 3000;
const fs = require('fs');

// import modules
require('./routes')({app});

//start the server:
app.listen(port,() => {
  console.log(`Server running on port:${port}`);
});

module.exports = app;
