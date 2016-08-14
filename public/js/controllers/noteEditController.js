angular.module('noteApp').controller('NoteEditController',['Note','$scope','$http','$routeParams',function(Note,$scope,$http,$routeParams){

 $scope.note = Note.query({id:$routeParams.id});
 $scope.isSubmitting = false;
 console.log($scope.note);


$scope.saveNote = function(note){
    $scope.isSubmitting=true;
    note.$update().finally(function(){
      $scope.isSubmitting=false;
      console.log($scope.note);
  });
  //

}


}]);
