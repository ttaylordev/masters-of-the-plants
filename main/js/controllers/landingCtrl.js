angular.module('plantMasters').controller('landingCtrl', function($scope, $window) {

  $window.navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;


    $scope.$apply(function() {
      $scope.lat = lat;
      $scope.lng = lng;
    })

    console.log(position);
  });

});
