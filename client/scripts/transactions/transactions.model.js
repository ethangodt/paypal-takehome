(function () {
  'use strict';
  angular
    .module('paypal-app')
    .factory('transactionsModel', transactionsModel);

  transactionsModel.$inject = ['$http'];
  function transactionsModel ($http) {
    var transactions = [];

    var status = {
      currentPage: 1,
      allDownloaded: false
    };

    var get = function () {
      return transactions;
    };

    var loadNextPage = function(cb) {
      // Fetches a specific page of transactions from the DB
      // I could wrap in promise instead of using cb
      // cb exists as a function to call when function finishes regardless
      // of what happened in the function (fetched or not)
      if (!status.allDownloaded) {
        $http.get('/api/transactions?page=' + status.currentPage)
          .then(function (response) {
            var data = response.data;
            if (data.length !== 0) {
              transactions = transactions.concat(response.data);
            } else {
              // All pages must have been downloaded
              status.allDownloaded = true;
            }
            status.currentPage++;
            cb();
          })
      } else {
        // fire cb anyway
        cb();
      }
    };

    return {
      get: get,
      loadNextPage: loadNextPage
    }
  }

}());
