(function () {
  'use strict';

  angular
    .module('paypal-app')
    .directive('radioButtons', directive);

  function directive () {
    var link = function ($scope, $el) {
      var $btns = $el.siblings('button');
      $el.on('click', function () {
        $el.toggleClass('checked');
        $btns.filter('.checked').toggleClass('checked');
      })
    };

    return {
      restrict: 'A',
      link: link
    }
  }

}());
