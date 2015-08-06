var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', ['$scope', function($scope){
	$scope.loadData = function(){
		console.log("loading data...");
	}
}]);

myApp.directive('loader',['',function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div>Hello there <div ng-transclude></transclude></div>',
		// templateUrl: '',
		// replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			iElm.bind("mouseenter", function(){
				$scope.loadData();
			});
		}
	};
}]);