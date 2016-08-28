angular.module('noteApp').controller('NoteCreateController',['$scope','Note','$location',function($scope,Note,$location){
  $scope.note = new Note();
  $scope.isSubmitting = false;

 $scope.saveNote = function(note){

  $scope.note.category='General';
  $scope.note.category_id = 1;
  $scope.isSubmitting=true;
  note.$save().then(function(){
    $location.path('/notes/');
  }).finally(function(){
      $scope.isSubmitting = false;
  });
 }
}]);
