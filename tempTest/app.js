var myApp = angular.module('myApp',[]);

myApp.directive('hello', function(){
    return{
        restrict: 'AE',
		template: '<div>This is <div ng-transclude></div> for test  </div>',
		transclude: true

    };
});

myApp.controller('myCtrl', ['$scope', function($scope){
	$scope.display = "initiating...";
	$scope.loadMyData = function(){
		$scope.display = "Loading data";
		console.log("loading data...");
	}
}]);

myApp.directive('good', function(){
	return{
		restrict: 'E',
		template: '<div> This is zheng wei <div ng-transclude></div></div>',
		transclude: true,
		link: function($scope, iElm, iAttrs, controller) {
			iElm.bind("mouseenter", function(){
				$scope.loadMyData($scope);
			});
		}
	};
});