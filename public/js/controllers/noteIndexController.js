angular.module('noteApp').controller('NoteIndexController',['Note','$scope','Shared',function(Note,$scope,Shared){

$scope.notes = Note.query();

console.log($scope.notes);
$scope.search={};
//window.sc=$scope;

function loadCategory() {
        $scope.selectedCategory = Shared.getCategoryId();
        console.log('Selected category:');
        console.log($scope.selectedCategory);
}

    loadCategory();

}]);
