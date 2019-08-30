
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })



    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.1', {
      url: '/1',
      views: {
        'menuContent': {
          templateUrl: 'templates/a_pH_Acidity.html'
        }
      }
    })

    .state('app.2', {
      url: '/2',
      views: {
        'menuContent': {
          templateUrl: 'templates/b_Alkalinity.html'
        }
      }
    })

  .state('app.3', {
      url: '/3',
      views: {
        'menuContent': {
          templateUrl: 'templates/c_Hardness.html'
        }
      }
    })
  .state('app.9', {
      url: '/9',
      views: {
        'menuContent': {
          templateUrl: 'templates/a_1_ph_to_molar_h.html'
        }
      }
    })
  .state('app.10', {
      url: '/10',
      views: {
        'menuContent': {
          templateUrl: 'templates/a_2_poh_to_molar_oh.html'
        }
      }
    })
  .state('app.11', {
      url: '/11',
      views: {
        'menuContent': {
          templateUrl: 'templates/a_3_phpoh_to_m_concentration.html'
        }
      }
    })
  .state('app.12', {
      url: '/12',
      views: {
        'menuContent': {
          templateUrl: 'templates/a_4_phchange.html'
        }
      }
    })
  .state('app.13', {
      url: '/13',
      views: {
        'menuContent': {
          templateUrl: 'templates/a_5_regresyon.html'
        }
      }
    })
  .state('app.14', {
      url: '/14',
      views: {
        'menuContent': {
          templateUrl: 'templates/a_6_lechet.html'
        }
      }
    })
  .state('app.15', {
      url: '/15',
      views: {
        'menuContent': {
          templateUrl: 'templates/a_7_pka.html'
        }
      }
    })
  .state('app.16', {
      url: '/16',
      views: {
        'menuContent': {
          templateUrl: 'templates/a_8_pkb.html'
        }
      }
    })
  .state('app.17', {
      url: '/17',
      views: {
        'menuContent': {
          templateUrl: 'templates/b_1_alk.html'
        }
      }
    })
  .state('app.18', {
      url: '/18',
      views: {
        'menuContent': {
          templateUrl: 'templates/b_2_alk2.html'
        }
      }
    })
  .state('app.19', {
      url: '/19',
      views: {
        'menuContent': {
          templateUrl: 'templates/stock.html'
        }
      }
    })
  .state('app.20', {
      url: '/20',
      views: {
        'menuContent': {
          templateUrl: 'templates/bod.html'
        }
      }
    })
  .state('app.21', {
      url: '/21',
      views: {
        'menuContent': {
          templateUrl: 'templates/cod.html'
        }
      }
    })

;
  
  $urlRouterProvider.otherwise('/app/playlists');
});
