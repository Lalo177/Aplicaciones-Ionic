angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

    
  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
      
  })

  .state('tab.first', {
    url: '/first',
    views: {
      'first-tab': {
        templateUrl: 'templates/first-tab.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.second', {
      url: '/second',
      views: {
        'second-tab': {
          templateUrl: 'templates/second-tab.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  
 
  
  .state('tab.other', {
      url: "/other",
      views: {
        'tab': {
          templateUrl: "templates/other.html",
  
        }
      }
    })


  .state('tab.third', {
    url: '/third',
    views: {
      'third-tab': {
        templateUrl: 'templates/third-tab.html',
        controller: 'AccountCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/first');

});


