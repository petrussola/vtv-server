// dependencies
const express = require('express');

const server = express();

// middleware
server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ message: 'ok' });
});

module.exports = server;
