(function () {
  'use strict';

  angular
    .module('paypal-app')
    .controller('transactions-ctrl', controller);

  controller.$inject = ['$scope', 'transactionsModel', '$timeout'];
  function controller ($scope, transactionsModel, $timeout) {
    var transCtrl = this;
    transactionsModel.loadNextPage(function(){
        transCtrl.trans = transactionsModel.get();
        console.log(transCtrl.trans);
      });

    $scope.$on('$viewContentLoaded', function() {
      var $window = $(window);
      var $content = $('.content.transactions');
      $window.on('scroll resize', function(){
        console.log($content.height());
        if ($content.height() - $window.height() - window.scrollY < 270) {
          transactionsModel.loadNextPage(function(){
            transCtrl.trans = transactionsModel.get();
          })
        }
      });
    });

  }

}());