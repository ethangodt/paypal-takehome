(function () {
  'use strict';
  angular
    .module('paypal-app')
    .factory('transactionsModel', transactionsModel);

  transactionsModel.$inject = ['$http', 'API_ENDPOINT_URL'];
  function transactionsModel ($http, API_ENDPOINT_URL) {
    var transactions = [];

    var status = {
      currentPage: 1,
      allDownloaded: false
    };

    var get = function () {
      return transactions;
    };

    var loadNextPage = function(cb) {
      // fetches a specific page of transactions from the DB
      if (!status.allDownloaded) {
        $http.get('/api/transactions?page=' + status.currentPage)
          .then(function (response) {
            var data = response.data;
            if (data.length !== 0) {
              transactions = transactions.concat(response.data);
            } else {
              status.allDownloaded = true;
            }
            status.currentPage++;
            cb();
          })
      }
      cb();
    };

    return {
      get: get,
      loadNextPage: loadNextPage
    }
  }

}());
