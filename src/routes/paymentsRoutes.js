const express = require('express');
const routes = express.Router;

const paymentsController = require('../controllers/paymentsControllers');

routes.get('/checkout/:id/:email/:description/:amount', paymentsController.checkout);

routes.get('/sucess', (req, res) => {
    return res.render('sucess_screen')
});

routes.get('/pending', (req, res) => {
    return res.render('pending_screen')
});

reoutes.get('/failure', (req, res) => {
    return res.render('failure_screen')
});

module.exports = routes;