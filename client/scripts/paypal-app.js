(function () {
  'use strict';

  angular
    .module('paypal-app', [
      'ui.router'
    ])
    .config(router);

  router.$inject = ['$stateProvider', '$urlRouterProvider'];
  function router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          header: {
            templateUrl: 'scripts/homepage/header.tmpl.html'
          },
          content: {
            templateUrl: 'scripts/homepage/content.tmpl.html'
          },
          footer: {
            templateUrl: 'scripts/homepage/footer.tmpl.html'
          }
        }
      })
      .state('send-money', {
        url: '/send-money',
        views: {
          header: {
            templateUrl: 'scripts/send-money/header.tmpl.html'
          },
          content: {
            templateUrl: 'scripts/send-money/content.tmpl.html'
          },
          footer: {
            templateUrl: 'scripts/send-money/footer.tmpl.html'
          }
        }
      })
      .state('transactions', {
        url: '/transactions',
        views: {
          header: {
            templateUrl: 'scripts/transactions/header.tmpl.html'
          },
          content: {
            templateUrl: 'scripts/transactions/content.tmpl.html'
          }
        }
      })
  }

}());