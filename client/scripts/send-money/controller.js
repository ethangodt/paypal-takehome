(function () {
  'use strict';

  angular
    .module('paypal-app')
    .controller('send-money-ctrl', controller);

  controller.$inject = ['$scope', '$timeout', '$state', 'currencies'];
  function controller ($scope, $timeout, $state, currencies) {
    var sendCtrl = this;

    // VALIDATION
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

    // CURRENCY SELECTION
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

    // CLEAR
    // clears all content in form
    sendCtrl.clearForms = function () {
      // a better solution here might be to set up the $setPrestine function on the form
      $('input').add('textarea').val('');
      $('button[radio-buttons]').removeClass('checked');
      $scope.$broadcast('email:validation', 'clear');
      $scope.$broadcast('amount:validation', 'clear');
      sendCtrl.selectedCurrency = 'USD';
      sendCtrl.currentCurrencyInfo = currencies[sendCtrl.selectedCurrency];
    };

    // SUBMIT
    // simple submission animation to mock loading and redirect to success state
    sendCtrl.handleSubmit = function () {
      var emailIsValid = sendCtrl.sendMoneyForm.email.$valid,
          amountIsValid = sendCtrl.sendMoneyForm.amount.$valid,
          purposeIsSelected = $('button[radio-buttons]').filter('.checked').length > 0;

      // ideally I would not be using this class to check to see if something was selected
      if (emailIsValid && amountIsValid && purposeIsSelected) {
        var $loadingOverlay = $('.loadingOverlay');
        $loadingOverlay.show();
        $timeout(function () {
          // todo make this go to finished page
          $state.go('home');
        }, 1500);
      } else {
        sendCtrl.fixInputs = true;
      }
    }
  }

}());
