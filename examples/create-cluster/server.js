/**
 * @file server.js
 * @description NodeJS Samples - Node Cluster Server
 * @author Desmond G. Jones <desmond@pnw3dev.com>
 */

/**
 * DEPENDENCIES
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // CREATE EXPRESS APP
app.set('trust proxy', true);
// PARSE ENCODED URLS - important for api responses
app.use(bodyParser.urlencoded({
    extended: false
}));

const {startServer} = require('./lib/cluster.js')
startServer(app, {
    port:8009,
    appname:'Node/Express Cluster Server',
    isCluster:true
});

module.exports = app;
