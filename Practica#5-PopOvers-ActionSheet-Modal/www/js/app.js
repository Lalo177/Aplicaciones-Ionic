angular.module('starter', ['ionic','controllers.popover','controller.sheet','controller.modal'])

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

.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state('main',{
    url:'/main',
    templateUrl:'templates/main.html'
  })
  .state('popover',{
    url:'/popoverExample',
    templateUrl:'templates/menu-popover.html',
    controller:'popoverCtrl'
  })
  .state('actionSheet',{
    url:'/actionSheet',
    templateUrl:'templates/action-sheet.html',
    controller:'sheetCtrl'
  })
   .state('modal',{
    url:'/modal',
    templateUrl:'templates/modal-menu.html',
    controller:'modalCtrl'
  })


  $urlRouterProvider.otherwise('main');
})
