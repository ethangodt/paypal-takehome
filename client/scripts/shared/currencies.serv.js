(function () {
  'use strict';
  angular
    .module('paypal-app')
    .factory('currencies', factory);

  function factory () {
    // CURRENCY DISPLAY TOOLS ----
    // the ng-currency directive is handling input formatting of currency information
    // it and the placeholder attr require some currency information
    return {
      USD: {
        symbol: '$',
        example: '$3.14'
      },
      EUR: {
        symbol: '€',
        example: '€3,14'
      },
      JPY: {
        symbol: '¥',
        example: '¥3,14'
      }
    };
  }

}());
