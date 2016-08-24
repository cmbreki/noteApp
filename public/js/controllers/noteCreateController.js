angular.module('noteApp').controller('NoteCreateController',['$scope','Note','$location',function($scope,Note,$location){
  $scope.note = new Note();
  $scope.isSubmitting = false;

 $scope.saveNote = function(note){

  $scope.note.category='General';
  $scope.note.category_id = 1;
  //$scope.note.date = Date.now();
  $scope.note.date = "24-12-2016";
  $scope.isSubmitting=true;
  note.$save().finally(function(){
      $scope.isSubmitting = false;
      $location.path('/notes/');
  });

 }
}]);
