// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers','core','hotels','user','ionic-datepicker', 'locationSearch', 'rzModule', 'service'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

   // $rootScope.$on('$stateChangeStart', function (event, next, current) {
   //      var userInfo = $cookieStore.get('userInfo');
   //      if (!userInfo) {
   //          // user not logged in | redirect to login
   //          if (next.name !== "welcome") {
   //              // not going to #welcome, we should redirect now
   //              event.preventDefault();
   //              //$state.go('welcome');
   //          }
   //      } else {
   //          event.preventDefault();
   //          $state.go('dashboard');
   //      }
   //  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.tabs', {
    url: '/tabs',
    views: {
      'menuContent': {
        templateUrl: 'templates/tabs.html'
      }
    }
  })

  .state('app.tabs.home', {
    url: '/home',
    views: {
      'mainContent': {
        templateUrl: 'templates/home.html'
      }
    },
    controller : 'HomeCtrl as vm'
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
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

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('login', {
    url : '/login',
    templateUrl : 'templates/login.html',
    controller: 'LoginCtrl as vm'
  })
  .state('signup', {
    url : '/signup',
    templateUrl : 'templates/signup.html',
    controller: 'SignUpCtrl as vm'
  })
  .state('resetPassword', {
    url : '/reset-password',
    templateUrl : 'templates/reset-password.html',
    controller: 'ResetPwdCtrl as vm'
  })
  .state('dashboard', {
    url : '/dashboard',
    templateUrl : 'templates/dashboard.html',
    controller: 'DashBoardCtrl as vm'
  })
  .state('getQuotes', {
    url : '/getQuotes',
    templateUrl : 'templates/Hotels/hotels.getQuotes.html',
    controller: 'HotelsQuotesCtrl as vm'
  })
  .state('servicePost', {
    url : '/servicePost',
    templateUrl : 'templates/Hotels/hotels.getQuotes.html',
    controller: 'HotelsQuotesCtrl as vm'
  }).state('buyProperty', {
    url : '/buyProperty',
    templateUrl : 'templates/buy-property.html',
    controller: 'BuyPropertyCtlr as vm'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/tabs/home');
});
