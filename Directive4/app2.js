var myApp = angular.module('myApp',[]);

myApp.directive('accordion', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude) {
			var expanders = [];
			this.gotOpened = function(selectedExpander){
				angular.forEach(expanders, function(pp){
					if(selectedExpander != pp){
						pp.showMe = false;
					}
				});
			};
			this.addExpander = function(expander){
				expanders.push(expander);
			}
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div ng-transclude></div>',
		// templateUrl: '',
		replace: true,
		transclude: true
	};
});

myApp.directive('expander', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			title: '=expanderTitle'
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		require: '^?accordion', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div>'
		+ '<div ng-click="toggle()"> {{title}} </div>'
		+ '<div ng-show="showMe" ng-transclude></div>'
		+ '</div>',
		// templateUrl: '',
		replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			$scope.showMe = false;
			controller.addExpander($scope);
			$scope.toggle = function(){
				$scope.showMe = !$scope.showMe;
				controller.gotOpened($scope);
			};
		}
	};
});

myApp.controller('myController', ['$scope', function($scope){
	$scope.expanders = [{
		title: '#1 click me',
		text: "#1 text me"
	},
	{
		title: '#2 click me',
		text: "#2 text me"
	},
	{
		title: '#3 click me',
		text: "#3 text me"
	}];
}]);