(function () {
  'use strict';

  angular.module('ucsalApp').controller('NewsDetailCtrl', NewsDetailCtrl);

  NewsDetailCtrl.$inject = ['$state', '$stateParams', 'NoticiasService'];
  function NewsDetailCtrl($state, $stateParams, NoticiasService) {
    var vm = this;
    vm.item = NoticiasService.byId($stateParams.id);

    if (!vm.item) {
      $state.go('app.home');
    }
  }
}());
