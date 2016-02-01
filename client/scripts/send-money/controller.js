(function () {
  'use strict';

  angular
    .module('paypal-app')
    .controller('send-money-ctrl', controller);

  //controller.$inject
  function controller () {
    var sendCtrl = this;

    sendCtrl.validation = {};
    sendCtrl.validation.email = function (value) {
      // check to see if valid email
        // if not make red x appear
        // if so make green check appear
    };

    // submit transaction button



  }

}());
