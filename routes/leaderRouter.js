const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Sending all the leaders to you');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name)
})
.put((req, res, next) => {
    res.end('PUT operation not supported in /leaders');
})
.delete((req, res, next) => {
    res.end('Deleteing all the leaders');
})

leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Sending the leader: ' + req.params.leaderId);
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.params.leaderId)
})
.put((req, res, next) => {
    res.write('Edition leader: ' + req.params.leaderId + '\n')
    res.end('Will update leader ' + req.params.leaderId);
})
.delete((req, res, next) => {
    res.end('Deleteing the leader: ' + req.params.leaderId);
})

module.exports = leaderRouter; 