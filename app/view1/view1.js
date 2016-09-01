'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {
$http.get("https://data.gov.in/api/datastore/resource.json?resource_id=b46200c1-ca9a-4bbe-92f8-b5039cc25a12&api-key=574cfe75dbb216592ad3419d97bfa16c")
.then(function(response){

	var railInfo=response.data.records;
    $scope.details=railInfo.map(function(item,index){
		return {
			fieldID: item['id'],
			fieldTimestamp: item['timestamp'],
			fieldTrainNo: item['Train No'],
			fieldTrainName: item['train Name'],
			fieldIslNo: item['islno'],
			fieldStationCode: item['station Code'],
			fieldStationName: item['Station Name'],
			fieldArriavalTime: item['Arrival time'],
			fieldDepartureTime: item['Departure time'],
			fieldDistance: item['Distance'],
			fieldSourceStationCode: item['Source Station Code'],
			fieldSourceStationName: item['source Station Name'],
			fieldDestinationStationCode: item['Destination station Code'],
			fieldDestinationStationName: item['Destination Station Name']
		};
	});

	});
}]);
