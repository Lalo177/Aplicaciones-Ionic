angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope) {
  // don't be scared by the image value, its just datauri
  
  $scope.items = [
    { id: 1, album: 'Gotta Be Somebody', artist: 'Nickelback', image: 'img/nickelback1.jpg' },
    { id: 2, album: 'Dark Horse', artist: 'Nickelback', image: 'img/nickelback2.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image: 'img/nickelback3.jpg' },
    { id: 4, album: 'All The Right Reasons', artist: 'Nickelback', image: 'img/nickelback4.jpg' }
  ];
  
});