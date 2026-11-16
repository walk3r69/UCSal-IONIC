(function () {
  'use strict';

  angular.module('ucsalApp').controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$state', 'AuthService'];
  function LoginCtrl($state, AuthService) {
    var vm = this;
    vm.credentials = { registration: '', password: '' };
    vm.errorMessage = '';

    vm.submit = function (form) {
      vm.errorMessage = '';

      if (form.$invalid) {
        vm.errorMessage = 'Informe a matrícula e a senha para continuar.';
        return;
      }

      if (!AuthService.login(vm.credentials.registration, vm.credentials.password)) {
        vm.errorMessage = 'Dados não encontrados. Use a credencial de demonstração indicada abaixo.';
        return;
      }

      $state.go('app.home');
    };
  }
}());
