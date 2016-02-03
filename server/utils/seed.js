// just seeds DB; does not export anything

var fs = require('fs');
var transactions = require('../transactions/controller');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'hr',
    database : 'paypal_takehome'
  }
});

(function() {
  fs.readFile(__dirname + '/transactions.json', 'utf8', function(err, data){
    var transData = JSON.parse(data);

    // I need to ensure the DB has time to write the data for each transaction
    // making improvised promise loop
    var count = 0;
    (function promiseLoop() {
      transactions.create(transData[count])
        .then(function () {
          count++;
          count < transData.length && promiseLoop();
        })
    })();

  })
})();
