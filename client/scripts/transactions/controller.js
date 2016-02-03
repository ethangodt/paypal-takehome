(function () {
  'use strict';

  angular
    .module('paypal-app')
    .controller('transactions-ctrl', controller);

  controller.$inject = ['$scope', 'transactionsModel', 'currencies'];
  function controller ($scope, transactionsModel, currencies) {
    var transCtrl = this,
        $window,
        $content;

    transCtrl.currencies = currencies;

    // INFINITE SCROLLING AND TRANSACTION FETCHING
    transactionsModel.loadNextPage(function(){
        transCtrl.trans = transactionsModel.get();
      });

    $scope.$on('$viewContentLoaded', function() {
      $window = $(window);
      $content = $('.content.transactions');
      $window.on('scroll resize', function(){
        if ($content.height() - $window.height() - window.scrollY < 270) {
          transactionsModel.loadNextPage(function(){
            transCtrl.trans = transactionsModel.get();
          })
        }
      });
    });

    // Dropping the event listener helps to maintain more accurate results
    // if the view is left and then visited again. jQuery was miss firing an incorrect value.
    $scope.$on('$destroy', function() {
      $window.off('scroll resize');
    });
  }

}());
