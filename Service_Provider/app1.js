var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope','$http', function($scope, $http){
	$http({
		method: 'GET',
		url: 'data1.json'
	}).success(function(data, status, headers, config){
		console.log("Success...");
		console.log(data);
		$scope.users = data;
	}).error(function(data, status, headers, config){
		console.log("error...");
	});
}]);