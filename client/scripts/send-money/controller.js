(function () {
  'use strict';

  angular
    .module('paypal-app')
    .controller('send-money-ctrl', controller);

  controller.$inject = ['$scope'];
  function controller ($scope) {
    var sendCtrl = this;

    sendCtrl.validation = {};
    sendCtrl.validation.setState = function (inputName) {
      var isNotBlank = !!sendCtrl[inputName],
          state;

      if (isNotBlank) {
        state = (sendCtrl.sendMoneyForm[inputName].$valid) ? 'passed' : 'failed';
      } else {
        // prevents input from incorrectly passing when blank
        state = 'failed';
      }

      $scope.$emit(inputName + ':validation', state);
    };

    sendCtrl.validation.clearState = function (inputName) {
      $scope.$emit(inputName + ':validation', 'clear');
    };

    // submit transaction button
  }

}());
