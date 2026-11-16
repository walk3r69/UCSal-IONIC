(function () {
  'use strict';

  angular.module('ucsalApp', ['ionic'])
    .config(configureRoutes)
    .run(protectRoutes)
    .filter('statusLabel', function () {
      return function (status) {
        return status === 'A Pagar' ? 'Em aberto' : status;
      };
    });

  configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider'];
  function configureRoutes($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.navBar.alignTitle('center');
    $ionicConfigProvider.backButton.text('Voltar');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl as vm'
      })
      .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('app.home', {
        url: '/home',
        views: {
          menuContent: {
            templateUrl: 'templates/noticias.html',
            controller: 'NoticiasCtrl as vm'
          }
        }
      })
      .state('app.news-detail', {
        url: '/noticia/:id',
        views: {
          menuContent: {
            templateUrl: 'templates/noticia-detalhe.html',
            controller: 'NewsDetailCtrl as vm'
          }
        }
      })
      .state('app.profile', {
        url: '/perfil',
        views: {
          menuContent: {
            templateUrl: 'templates/perfil.html',
            controller: 'PerfilCtrl as vm'
          }
        }
      })
      .state('app.finance', {
        url: '/financeiro',
        views: {
          menuContent: {
            templateUrl: 'templates/financeiro.html',
            controller: 'FinanceiroCtrl as vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/login');
  }

  protectRoutes.$inject = ['$rootScope', '$state', 'AuthService'];
  function protectRoutes($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      var isLogin = toState.name === 'login';

      if (!isLogin && !AuthService.isAuthenticated()) {
        event.preventDefault();
        $state.go('login');
      }

      if (isLogin && AuthService.isAuthenticated()) {
        event.preventDefault();
        $state.go('app.home');
      }
    });
  }
}());
