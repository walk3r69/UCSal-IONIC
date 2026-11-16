(function () {
  'use strict';

  angular.module('ucsalApp').factory('AlunoService', AlunoService);

  function AlunoService() {
    var profile = {
      fullName: 'Jorlan Heider',
      registration: '200029941',
      course: 'Engenharia de Software',
      email: 'jorlan.heider@gmail.com',
      phone: '(71) 99999-2026',
      cep: '41720-000',
      street: 'Avenida Paralela, 1200',
      neighborhood: 'Pituaçu',
      city: 'Salvador - BA'
    };

    return {
      getProfile: function () { return profile; },
      updateProfile: function (nextProfile) {
        angular.extend(profile, nextProfile);
        return profile;
      }
    };
  }
}());
