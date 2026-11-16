(function () {
  'use strict';

  angular.module('ucsalApp').controller('NoticiasCtrl', NoticiasCtrl);

  NoticiasCtrl.$inject = ['$state', 'NoticiasService'];
  function NoticiasCtrl($state, NoticiasService) {
    var vm = this;
    vm.items = NoticiasService.all();
    vm.firstName = 'Jorlan';
    vm.metrics = { completed: 4 };
    vm.categories = ['Todos', 'Notícia', 'Evento'];
    vm.selectedCategory = 'Todos';
    vm.categoryFilter = { category: '' };

    vm.setCategory = function () {
      vm.categoryFilter.category = vm.selectedCategory === 'Todos' ? '' : vm.selectedCategory;
    };

    vm.readMore = function (item) {
      $state.go('app.news-detail', { id: item.id });
    };

    vm.scrollToNews = function () {
      var newsSection = document.getElementById('news-section');
      if (newsSection) newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }
}());
