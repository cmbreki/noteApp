angular.module('noteApp').controller('NoteIntroController',['Category','$scope', function(Category,$scope){
var vm=this;
this.categories = Category.query();

console.log("Hello from INTRO Controller ");
console.log(this.categories);


}]);
