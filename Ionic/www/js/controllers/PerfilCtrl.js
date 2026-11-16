(function () {
  'use strict';

  angular.module('ucsalApp').controller('PerfilCtrl', PerfilCtrl);

  PerfilCtrl.$inject = ['AlunoService', 'FeedbackService'];
  function PerfilCtrl(AlunoService, FeedbackService) {
    var vm = this;
    vm.form = angular.copy(AlunoService.getProfile());

    vm.save = function (form) {
      if (form.$invalid) return;
      AlunoService.updateProfile(vm.form);
      FeedbackService.success('Cadastro atualizado', 'Suas informações editáveis foram salvas em memória nesta sessão.');
    };
  }
}());
