var myApp = angular.module('myApp',[]);

myApp.factory('userListService', ['$http', function($http){
	/*return function name(){
		
	};*/
	var doRequest = function(username, path){
		return $http({
			method: 'GET',
			url: 'data1.json'
		});
	}

	return{
		userList: function(username){
			return doRequest(username, 'userList');
		}
	};
}]);

myApp.controller('myCtrl', ['$scope','userListService','$timeout',  function($scope, userListService, $timeout){
	var timeout;
	$scope.$watch('username', function(newUserName){
		if(newUserName){
			if(timeout){
				$timeout.cancel(timeout);
			}
			timeout = $timeout(function(){
				userListService.userList(newUserName)
				.success(function(data, status){
					$scope.users = data;
				});
			},350);
		}
	});
}])