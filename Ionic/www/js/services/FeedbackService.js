(function () {
  'use strict';

  angular.module('ucsalApp').factory('FeedbackService', FeedbackService);

  FeedbackService.$inject = ['$ionicPopup'];
  function FeedbackService($ionicPopup) {
    return {
      success: function (title, message) {
        return $ionicPopup.alert({
          title: title,
          template: message,
          okText: 'Entendi',
          okType: 'button-positive portal-popup-button'
        });
      }
    };
  }
}());
