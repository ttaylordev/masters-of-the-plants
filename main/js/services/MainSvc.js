angular.module('plantMasters').service('MainSvc', function($http, $q, $state) {

  this.postZip = (request) => {

    $http.post("http://localhost:3000/zip/", request)
    .success(function(result) {
      console.log(result);
      coords = result;
    }).error(function() {
      console.log('error');
    })
  }

  //http post, return geolocation info

  //query hardiness, return hardiness level
})
