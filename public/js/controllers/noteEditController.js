angular.module('noteApp').controller('NoteEditController',['Note','$scope','$http','$routeParams',function(Note,$scope,$http,$routeParams){

$scope.note = Note.query({id:$routeParams.id});


$scope.saveNote = function(note){
  note.$update();
  //console.log(note);

}


}]);
