angular.module('noteApp').controller('NoteShowController',['Note','$scope','$http','$stateParams','$location',function(Note,$scope,$http,$stateParams,$location){
  console.log("Hello SHOW  note controller");
 $scope.note = Note.query({id:$stateParams.id});
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
