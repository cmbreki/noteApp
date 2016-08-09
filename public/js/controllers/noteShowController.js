angular.module('noteApp').controller('NoteShowController',['Note','$scope','$http','$routeParams',function(Note,$scope,$http,$routeParams){

 $scope.note = Note.query({id:$routeParams.id});
  console.log($scope.note);
  

/* $http.get('/notes/'+$routeParams.id).success(function(response){

   console.log(response);

 }); */


}]);
