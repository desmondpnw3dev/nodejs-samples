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
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); // important! Required to handle http request data
app.use(bodyParser.json());

// import modules
require('./server/routes')({app});

//start the server:
app.listen(port,() => {
  console.log(`Server running on port:${port}`);
});

module.exports = app;
