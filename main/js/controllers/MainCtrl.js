angular.module('plantMasters').controller('MainCtrl', function($scope, $window, MainSvc) {


  //HTML5 Geolocation
  $window.navigator.geolocation.getCurrentPosition(function(position) {
    var location = [ position.coords.latitude, position.coords.longitude ]

    $scope.$apply(function () {
      $scope.coordinates = location;
    });
  });

  //Geolocation by zipcode
  //invoke function in service, get zipcode geolocation info
  $scope.$watch('zip', (newValue, oldValue) => {
       if (newValue) {
           let isNum = /^\d+$/.test(newValue);
           if (newValue.length > 5 || !isNum) {
               $scope.zip = oldValue;
           }
       }
   });


   $scope.submitForm: function(zip) {
       $scope.zip = zip
       MainSvc.postZip(zip);
   };


  //invoke function to get hardiness level based on lat/lng, put on scope

});
