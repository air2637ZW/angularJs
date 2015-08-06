var myApp = angular.module('myApp',[]);

myApp.directive('expander',function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			title: '=expanderTitle'
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div>'
		+ '<div class="title" ng-click="toggle()">{{title}}</div>'
		+ '<div class="body" ng-show="showMe" ng-transclude></div>'
		+ '</div>',
		// templateUrl: '',
		replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			$scope.showMe = false;
			$scope.toggle = function(){
				$scope.showMe = !$scope.showMe;
			};
		}
	};
});

myApp.controller('myController', ['$scope', function($scope){
	$scope.title = "click me to expand";
	$scope.text = "this is the content";
}])