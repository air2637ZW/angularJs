var myApp = angular.module("myApp", []);

myApp.controller("StudentController", function($scope){
	$scope.student = {
				firstName: "Mahesh",
		      	lastName: "Parashar",
		      	fullName: function() {
			         var studentObject;
			         studentObject = $scope.student;
			         return studentObject.firstName + " " + studentObject.lastName;
		      	}
			};
});
