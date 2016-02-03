// this is mainly an example of how I'd grow out an API
// could branch out to a number of different paths here

var router = require('express').Router();
var transactionsRoutes = require('./transactions/routes');
// var userRoutes, etc.

router.use('/transactions', transactionsRoutes);

module.exports = router;
