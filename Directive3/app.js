var myApp = angular.module('myApp',[]);

myApp.directive('helloworld', ['', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<p style="background-color:{{color}}">Hello World</p>',
		// templateUrl: '',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			iElm.bind('click',function(){
				iElm.css('background-color','white');
				$scope.$apply(function(){
					$scope.color="white";
				});
			});
			iElm.bind('mouseover',function(){
				iElm.css('cursor','pointer');
			});
		}
	};
}]);
