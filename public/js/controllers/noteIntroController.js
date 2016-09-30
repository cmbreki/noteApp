angular.module('noteApp').controller('NoteIntroController',['Category','$scope','Shared','$window', function(Category,$scope,Shared,$window){
var vm=this;
this.categories = Category.query();

//console.log("Hello from INTRO Controller ");

this.setCategory=function(category){
  console.log("The category is:");
  console.log(category);
  Shared.setCategoryId(category);
  $window.location.href = "#/notes";
}


}]);
