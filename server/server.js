var express = require('express');
var app = express();
var api = require('./api');
var knex = require('knex')({
  client: 'mysql',
  host: '127.0.0.1',
  user: 'root',
  password: 'hr',
  database: 'paypal_takehome',
  charset: 'utf8'
});

app.use(express.static(__dirname + '/../client'));
app.use('/api', api);

app.listen(8080, function() {
  console.log('Port listening on port' + 8080);
});
