var UserInfoApp = angular.module("UserInfoApp",[]);

UserInfoApp.controller('UserInfoCtrl', ['$scope', function($scope){
	$scope.userInfo = {
		email: "air2637@qq.com",
		password: "1234324",
		autoLogin: true
	};

	$scope.getFormData = function(){
		console.log($scope.userInfo);

	};
}]);


UserInfoApp.controller('CSSCtrl', ['$scope', function($scope){
	$scope.color = "red";
	$scope.setGreen = function(){
		$scope.color = "green";
	}
}]);


