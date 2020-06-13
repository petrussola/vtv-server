// dependencies
const express = require('express');
const cors = require('cors');

// routers
const router = require('./router/router');

const server = express();

// middleware
server.use(cors());
server.use(express.json());

// endpoints
server.use('/test', router);

module.exports = server;
