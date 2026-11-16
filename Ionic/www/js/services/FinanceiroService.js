(function () {
  'use strict';

  angular.module('ucsalApp').factory('FinanceiroService', FinanceiroService);

  function FinanceiroService() {
    var invoicesBySemester = {
      '2025.2': [
        { month: 'Agosto', dueDate: '10/08/2025', amount: 890.00, status: 'Paga', barcode: '83600000000890000000000000000000000000000000' },
        { month: 'Setembro', dueDate: '10/09/2025', amount: 890.00, status: 'Paga', barcode: '83600000000890000000000000000000000000000001' }
      ],
      '2026.1': [
        { month: 'Fevereiro', dueDate: '10/02/2026', amount: 930.00, status: 'Paga', barcode: '83600000000930000000000000000000000000000002' },
        { month: 'Março', dueDate: '10/03/2026', amount: 930.00, status: 'Paga', barcode: '83600000000930000000000000000000000000000003' },
        { month: 'Abril', dueDate: '10/04/2026', amount: 930.00, status: 'Paga', barcode: '83600000000930000000000000000000000000000004' }
      ],
      '2026.2': [
        { month: 'Agosto', dueDate: '10/08/2026', amount: 950.00, status: 'Paga', barcode: '83600000000950000000000000000000000000000005' },
        { month: 'Setembro', dueDate: '10/09/2026', amount: 950.00, status: 'A Pagar', barcode: '83600000000950000000000000000000000000000006' },
        { month: 'Outubro', dueDate: '10/10/2026', amount: 950.00, status: 'A Pagar', barcode: '83600000000950000000000000000000000000000007' }
      ]
    };

    return {
      semesters: function () { return Object.keys(invoicesBySemester); },
      invoicesFor: function (semester) { return invoicesBySemester[semester] || []; }
    };
  }
}());
