'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
constant('constant', {
  // The root URL that takes us to the IN Gov Data API
  'inGovDataUrl': 'https://data.gov.in/api/datastore/',

  // Resource type that should be fetched.
  // .json means return format is json .xml means return format is in xml.
  'resourceType': 'resource.json',

  // Out Application specific key that is recognized by data.gov.in
  'apiKey': 'api-key=574cfe75dbb216592ad3419d97bfa16c',
  // The Resource ID that fetches the Postal Code details from the API
  'pincodeResourceId': 'resource_id=7eca2fa3-d6f5-444e-b3d6-faa441e35294',
  
  'trainInfoResourceId': 'resource_id=b46200c1-ca9a-4bbe-92f8-b5039cc25a12'
});
