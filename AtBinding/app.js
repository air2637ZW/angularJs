var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', ['$scope',
	function($scope) {
		$scope.ctrlFlavor = "coke";
	}
]);

/*
myApp.directive('drink', function(){
	return{
		restrict: 'AE',
		template: '<div>{{flavor}}</div>',
		link: function(scope, element, attrs){
			scope.flavor = attrs.flavor;
		}
	}
});
*/

//Alternatively
myApp.directive('drink', function(){
	return{
		restrict: 'AE',
		template: '<div>{{flavor}}</div>',
		link: function(scope, element, attrs){
			scope.flavor = attrs.name;
		}
	}
});

/*myApp.directive('drink', function() {

	return {
		restrict: 'AE',
		scope: {
			name: '@'
		},
		template: '<input type="text" ng-model="name"> directive-flavor: {{name}}',
		repalce: true
	}
});*/