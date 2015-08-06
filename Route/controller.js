var controllers = angular.module("Controllers", []);

controllers.controller("StudentController", function($scope){
	$scope.student = {
				firstName: "Mahesh",
		      	lastName: "Parashar",
		      	fullName: function() {
			         var studentObject;
			         studentObject = $scope.student;
			         return studentObject.firstName + " " + studentObject.lastName;
		      	}
			};
	$scope.pageClass = "hello";
});

controllers.controller('TeacherController', ['$scope', function($scope){
	$scope.pageClass = "list";
	
	$scope.toPageView1 = function(){
		window.location.href="#/morning";
	};
}]);