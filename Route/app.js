var myApp = angular.module("myApp", ['ngRoute','ngAnimate','Controllers']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl: 'hello.html',
		controller: 'TeacherController'
	}).when('/morning',{
		templateUrl: 'view1.html',
		controller: 'StudentController'
	}).otherwise({
		redirectTo: '/hello'
	});
}]);



