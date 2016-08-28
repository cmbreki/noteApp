angular.module('noteApp').controller('UsersShowController',['User','$scope','$routeParams', function(User,$scope,$routeParams){

$scope.user = User.get({id: $routeParams.id});

console.log($scope.user);
}]);
