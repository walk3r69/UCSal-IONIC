(function () {
  'use strict';

  angular.module('ucsalApp').controller('MenuCtrl', MenuCtrl);

  MenuCtrl.$inject = ['$state', 'AuthService'];
  function MenuCtrl($state, AuthService) {
    var vm = this;
    vm.user = AuthService.current();

    vm.logout = function () {
      AuthService.logout();
      $state.go('login');
    };

  }
}());
