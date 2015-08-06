var inputExample =  angular.module('inputExample', [])
  	.controller('ExampleController', ['$scope', function($scope) {
  		$scope.user = {
  			name: 'guest',
  			last: 'visitor'
  		};
  		$scope.myAlert = function(){
  			window.alert("郑增去");
  		};
  		$scope.myHTML = 
  		'I am a <code>HTML</code> string with'+
  		'<a href="#">links!</a> and other <em>stuff</em>';
  	}]);