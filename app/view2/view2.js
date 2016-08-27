'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', '$window', 'constant', function($scope, $http, $window, constant) {
  var url = constant.localityBasedPincodeUrl;

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
