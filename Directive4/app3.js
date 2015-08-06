var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('AccordinDemoCtrl', ['$scope', function($scope){
	$scope.oneAtATime = true;
	$scope.groups = [{
		title:"Dynamic Group Header -1",
		content:"Dynamic Group Body - 1"
	},
	{
		title:"Dynamic Group Header -2",
		content:"Dynamic Group Body - 2"
	}];
	$scope.items = ['item1','item2','item3'];
	$scope.addItem = function(){
		var newItemNo = $scope.items.length + 1;
		$scope.items.push('item' + newItemNo);
	};
	$scope.status = {
		open: true,
		isFirstDisabled: false
	};
}]);