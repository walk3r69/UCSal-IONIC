(function () {
  'use strict';

  angular.module('ucsalApp').factory('AuthService', AuthService);

  AuthService.$inject = ['$window'];
  function AuthService($window) {
    var STORAGE_KEY = 'ucsal-portal-user';
    var students = [
      {
        registration: '200029941',
        password: '123456',
        fullName: 'Jorlan Heider',
        course: 'Engenharia de Software',
        email: 'jorlan.heider@ucsal.edu.br'
      }
    ];
    var currentUser = readSession();

    return {
      login: login,
      logout: logout,
      current: function () { return currentUser; },
      isAuthenticated: function () { return Boolean(currentUser); }
    };

    function login(registration, password) {
      var student = students.find(function (item) {
        return item.registration === registration && item.password === password;
      });

      if (!student) return false;
      currentUser = angular.copy(student);
      delete currentUser.password;
      $window.sessionStorage.setItem(STORAGE_KEY, angular.toJson(currentUser));
      return true;
    }

    function logout() {
      currentUser = null;
      $window.sessionStorage.removeItem(STORAGE_KEY);
    }

    function readSession() {
      var saved = $window.sessionStorage.getItem(STORAGE_KEY);
      return saved ? angular.fromJson(saved) : null;
    }
  }
}());
