var transactions = require('./controller');
var router = require('express').Router();

router.get('/', function (req, res) {
  // require page number
  transactions.fetchByPage(req.query.page)
  .then(function (data) {
    res.send(data)
  });
});

module.exports = router;
