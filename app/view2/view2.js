'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
  var url = 'https://data.gov.in/api/datastore/resource.json?resource_id=7eca2fa3-d6f5-444e-b3d6-faa441e35294&api-key=574cfe75dbb216592ad3419d97bfa16c&offset=' + '0&';

  url = url + 'fields=StateName';

  $http({
    method: 'GET',
    url: url
  }).then(successCallback, failureCallback);

  function successCallback(response) {
    $scope.pincodeData = response.data;
    console.log(response);
  }

  function failureCallback(response) {
    console.log(response);
    $window.alert('ERROR: There was an error!');
  }
}]);
