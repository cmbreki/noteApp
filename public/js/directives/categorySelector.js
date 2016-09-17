angular.module('noteApp').directive('categorySelector',['Category',function(Category){
  return{
    replace: true,
    restrict:"E",
    templateUrl:'../../templates/categorySelector.html',
    link: function(scope,element,attrs){
      scope.categories = Category.query();
      console.log(scope.categories);

    }
  }




}])
