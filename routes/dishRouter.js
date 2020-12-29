const exress = require('express');
const bodyParser = require('body-parser');

const dishRouter = exress.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end("sending dishes to you")
})

.post((req, res, next) => {
    res.end("will add the dish:" + req.body.name + 'with details: ' + req.body.description )
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported on /dishes" )
})

.delete((req, res, next) => {
    res.end("deleting all dishes")
});

dishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}) 
.get((req, res) => {
    res.end("sending details of the dish:" + req.params.dishId + 'to you')
})

.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /dishes/" + req.params.dishId )
})

.put((req, res, next) => {
    res.write('Updating dish' + dish.params.dishId + '\n')
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description)
})

.delete((req, res, next) => {
    res.end("deleting dish: " + req.params.dishId);
});

module.exports = dishRouter;