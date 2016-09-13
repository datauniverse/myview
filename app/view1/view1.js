'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http','$window','constant',function($scope,$http,$window,constant) {
	var url = constant.inGovDataUrl + constant.resourceType + '?' + constant.trainInfoResourceId + '&'+ constant.apiKey;

	$http({
		method: 'GET',
		url:url,
	}).then(successCallback,failureCallback);
	
	function successCallback(response)
	{
	$scope.railInfo=response.data;
    $scope.details=response.data.records.map(function(item,index){
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
	console.log(details);
	}
	
	function failureCallback(response) {
    console.log(response);
    $window.alert('ERROR: There was an error!');
  }
}

]);
