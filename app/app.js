'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.module('myApp').
constant('constant', {
  'localityBasedPincodeUrl': 'https://data.gov.in/api/datastore/resource.json?resource_id=7eca2fa3-d6f5-444e-b3d6-faa441e35294&api-key=574cfe75dbb216592ad3419d97bfa16c'
});
