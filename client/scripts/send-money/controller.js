(function () {
  'use strict';

  angular
    .module('paypal-app')
    .controller('send-money-ctrl', controller);

  controller.$inject = ['$scope', '$timeout', '$state'];
  function controller ($scope, $timeout, $state) {
    var sendCtrl = this;

    // VALIDATION ----
    // validation functions work in unison with simple pp-input-validation directive
    // if an input is valid on blur, the correct event is broadcast to initiate
    // pp specific DOM manipulation through directive
    sendCtrl.validation = {
      setState: function (inputName) {
        var isNotBlank = !!sendCtrl[inputName],
            state;

        if (isNotBlank) {
          state = (sendCtrl.sendMoneyForm[inputName].$valid) ? 'passed' : 'failed';
        } else {
          // prevents input from incorrectly passing when blank
          state = 'failed';
        }

        $scope.$broadcast(inputName + ':validation', state);
      },
      clearState: function (inputName) {
        $scope.$broadcast(inputName + ':validation', 'clear');
      }
    };

    // CURRENCY DISPLAY TOOLS ----
    // the ng-currency directive is handling input formatting of currency information
    // it and the placeholder attr require some currency information
    var currencies = {
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
    // currency defaults to USD on page load
    sendCtrl.currentCurrencyInfo = currencies.USD;
    // sendCtrl.selectedCurrency is used only to track the selected option
    sendCtrl.selectedCurrency = 'USD';
    sendCtrl.updateCurrencyInfo = function(){
      sendCtrl.currentCurrencyInfo = currencies[sendCtrl.selectedCurrency];
      // wrapping this in timeout because the sequence value are updating doesn't allow directive to know of change
      $timeout(function () {
        $scope.$broadcast('currencyRedraw');
      }, 0);
    };

    // SUBMIT ----
    // simple submission animation to mock loading and redirect to success state
    sendCtrl.handleSubmit = function () {
      var $loadingOverlay = $('.loadingOverlay');
      $loadingOverlay.show();
      $timeout(function () {
        // todo make this go to finished page
        $state.go('home');
      }, 1500);
    }
  }

}());
