// this is the tool used to create transactions.json since the transactions must be the same every time
// it's meant to be called manually

var fs = require('fs');

var getRandomDate = function () {
  var year = Math.floor(2012 + Math.random() * 4);
  var month = Math.floor(1 + Math.random() * 12);
  var day = Math.floor(Math.random() * 29);
  return year + '-' + month + '-' + day;
};

var getRandomPayee = function () {
  var payees = [
    'Isaac Newton',
    'Mr. Robot',
    'POTUS',
    'Kanye West',
    'PayPal',
    'NPR',
    'Hooray! Bikes',
    'Yummy Donuts',
    'Serious CDs',
    'Super Useless Superpowers',
    'Macca\'s',
    'Felix\'s',
    'Lasan Indian Cuisine'
  ];

  return payees[Math.floor(Math.random() * 13)]
};

var getRandomAmount = function () {
  // produces random amount between 1.00 and 50.00
  var int = Math.floor(100 + Math.random() * 4901);
  return (int / 100).toFixed(2);
};

var transactions = [];
for (var i = 0; i < 250; i++) {
  var newTrans = {
    date: getRandomDate(),
    payee: getRandomPayee(),
    amount: getRandomAmount()
  };
  transactions.push(newTrans)
}

fs.writeFileSync(__dirname + '/transactions.json', JSON.stringify(transactions));
