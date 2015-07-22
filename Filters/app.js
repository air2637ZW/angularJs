var myApp = angular.module("myApp", []);

myApp.controller("StudentController", function($scope){
	 $scope.student = {
      firstName: "Mahesh",
      lastName: "Parashar",
      fees:500,
      subjects:[
         {name:'Physics',marks:70},
         {name:'Chemistry',marks:80},
         {name:'Math',marks:65}
      ],
      fullName: function() {
         var studentObject;
         studentObject = $scope.student;
         return studentObject.firstName + " " + studentObject.lastName;
      }
   };
});


