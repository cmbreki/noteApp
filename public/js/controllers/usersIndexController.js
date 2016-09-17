angular.module('noteApp').controller('UsersIndexController',['User','$scope', function(User,$scope){

$scope.users = User.query();
$scope.search={};

}]);
