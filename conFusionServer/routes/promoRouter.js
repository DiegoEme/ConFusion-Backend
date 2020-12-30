const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end("sending promotions to you")
})

.post((req, res, next) => {
    res.end("will add the promotion: " + req.body.name + ' with details: ' + req.body.description )
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported on /promotions" )
})

.delete((req, res, next) => {
    res.end("deleting all promotions")
});

promoRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}) 
.get((req, res) => {
    res.end("sending details of the promotions:" + req.params.promoId + 'to you')
})

.post((req, res, next) => {
    res.status(403);
    res.end("POST operation not supported on /promotions/" + req.params.promoId )
})

.put((req, res, next) => {
    res.write('Updating promotion' + req.params.promoId + '\n')
    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description)
})

.delete((req, res, next) => {
    res.end("deleting promotion: " + req.params.dishId);
});

module.exports = promoRouter;