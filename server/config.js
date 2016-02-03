var config = {
  port: 8080,
  knex: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root', // update
      password: 'hr', // update
      database: 'paypal_takehome'
    }
  }
};

module.exports = config;
