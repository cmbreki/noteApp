angular.module('noteApp').controller('NoteShowController',['Note','$scope','$http','$routeParams','$location',function(Note,$scope,$http,$routeParams,$location){

 $scope.note = Note.query({id:$routeParams.id});
  console.log($scope.note);


/* $http.get('/notes/'+$routeParams.id).success(function(response){

   console.log(response);

 }); */

 $scope.deleteNote = function(note){

//console.log(note);
 note.$remove().then(function(){
 $location.path("/notes");
});

 };


}]);
