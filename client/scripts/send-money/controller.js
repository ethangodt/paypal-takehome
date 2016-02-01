(function () {
  'use strict';

  angular
    .module('paypal-app')
    .controller('send-money-ctrl', controller);

  controller.$inject = ['$scope'];
  function controller ($scope) {
    var sendCtrl = this;

    //sendCtrl.validation = {};
    //sendCtrl.validation.email = function (value) {
    //  $scope.$emit('email:validation', 'passed');
    //};

    // submit transaction button
  }

}());
