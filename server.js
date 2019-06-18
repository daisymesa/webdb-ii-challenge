const express = require('express');
const helmet = require('helmet');

const zoosRouter = require('./zoos-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/zoos', zoosRouter);

server.get('/', (req,res) => {
    res.send(`
    <h2>Server is working!</h2>
    `)
})

module.exports = server;
