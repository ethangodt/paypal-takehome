var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'hr',
    database : 'paypal_takehome'
  }
});

function create (trans) {
  // accepts formatted transaction object and creates transaction and payee
  return knex('payees').where({name: trans.payee})
    // ensure the payee exists in DB
    .then(function (payee) {
      payee = payee[0];
      if (!payee) {
        // create payee record
        return knex('payees').insert({
            name: trans.payee
          })
          .then(function (payeeId) {
            // pull out from array
            return payeeId[0];
          })
      } else {
        return payee.id;
      }
    })
    // create transaction record with payeeID
    .then(function (payeeId) {
      return knex('transactions').insert({
          amount: trans.amount,
          payee_id: payeeId,
          trans_date: trans.date
        })
    });

}

function fetchByPage (pageNum) {
  // simple pagination fetcher
  return knex
    .from('transactions')
    .innerJoin('payees', 'transactions.payee_id', 'payees.id')
    .orderBy('trans_date', 'desc').limit(30)
    .offset((pageNum - 1) * 30)

}

module.exports = {
  create: create,
  fetchByPage: fetchByPage
};
