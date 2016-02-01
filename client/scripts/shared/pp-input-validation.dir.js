// make attribute directive that can be applied to element to listen
// for correct events to change the correct indicator
(function () {
  'use strict';

  angular
    .module('paypal-app')
    .directive('ppInputValidation', directive);

  function directive () {
    var link = function (scope, $el, attrs) {
      var icons = $el.siblings('svg'),
          eventName = attrs.ppInputValidation + ":validation";

      // listens for validation events to set input state
      scope.$on(eventName, function (event, status) {
        icons.hide();
        if (status === 'passed') {
          icons.filter('.checkmark').show();
        } else {
          // validation 'failed'
          icons.filter('.x').show();
        }
      });
    };

    return {
      restrict: 'A',
      link: link
    }
  }

}());
