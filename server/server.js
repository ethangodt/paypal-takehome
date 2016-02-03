var express = require('express');
var app = express();
var api = require('./api');
var config = require('./config');
var knex = require('knex')(config.knex);

app.use(express.static(__dirname + '/../client'));
app.use('/api', api);

app.listen(config.port, function() {
  console.log('Port listening on port ' + config.port);
});
