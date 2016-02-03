(function () {
  'use strict';

  angular
    .module('paypal-app', [
      'ui.router',
      'ng-currency'
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
            templateUrl: 'scripts/send-money/content.tmpl.html',
            controller: 'send-money-ctrl',
            controllerAs: 'sendCtrl'
          }
        }
      })
      .state('confirmation', {
        url: '/confirmation',
        views: {
          content: {
            templateUrl: 'scripts/confirmation/content.tmpl.html',
          },
          footer: {
            templateUrl: 'scripts/confirmation/footer.tmpl.html'
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
            templateUrl: 'scripts/transactions/content.tmpl.html',
            controller: 'transactions-ctrl',
            controllerAs: 'transCtrl'
          },
          footer: {
            templateUrl: 'scripts/transactions/footer.tmpl.html'
          }
        }
      })
  }

}());
