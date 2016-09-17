angular.module('noteApp').controller('NoteEditController',['Note','Category','User','$scope','$http','$routeParams','$location',function(Note,Category,User,$scope,$http,$routeParams,$location){

 $scope.note = Note.query({id:$routeParams.id});
 $scope.isSubmitting = false;
 $scope.categories=[];

 $scope.categories = Category.query();
 $scope.users = User.query();

$scope.saveNote = function(note){
    $scope.isSubmitting=true;
    note.$update().finally(function(){
      $scope.isSubmitting=false;
      $location.path("/notes/"+ note.id);
  });
  //
}


}]);
