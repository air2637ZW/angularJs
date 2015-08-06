var myApp = angular.module('myApp',[]);

/*myApp.controller('testCtrl', ['$scope', function($scope){
	$scope.userType = 'guest';
}]);*/

myApp.controller('anotherCtrl', ['$scope', function($scope){
	$scope.user = {
		name : "test",
		email : "test@gmail.com",
		gender : "male",
		agree : true
	}
	$scope.resetFrom = function(){
		$scope.user = null;
	};
}]);