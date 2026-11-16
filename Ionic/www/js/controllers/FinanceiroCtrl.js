(function () {
  'use strict';

  angular.module('ucsalApp').controller('FinanceiroCtrl', FinanceiroCtrl);

  FinanceiroCtrl.$inject = ['$window', 'FinanceiroService', 'FeedbackService'];
  function FinanceiroCtrl($window, FinanceiroService, FeedbackService) {
    var vm = this;
    vm.semesters = FinanceiroService.semesters();
    vm.selectedSemester = '2026.2';
    vm.invoices = [];

    vm.loadInvoices = function () {
      vm.invoices = FinanceiroService.invoicesFor(vm.selectedSemester);
    };

    vm.copyBarcode = function (invoice) {
      if ($window.navigator.clipboard && $window.navigator.clipboard.writeText) {
        $window.navigator.clipboard.writeText(invoice.barcode);
      }
      FeedbackService.success('Código copiado', 'A linha digitável de ' + invoice.month + ' está pronta para colar no seu banco.');
    };

    vm.loadInvoices();
  }
}());
