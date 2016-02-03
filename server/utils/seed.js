// just seeds DB; does not export anything

var fs = require('fs');
var transactions = require('../transactions/controller');
var config = require('./../config');
var knex = require('knex')(config.knex);

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
          if (count < transData.length) {
            promiseLoop();
          } else {
            process.exit();
          }
        })
    })();

  })
})();
