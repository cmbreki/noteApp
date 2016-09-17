angular.module('noteApp').directive('categorySelector',['Category',function(Category){
  return{
    replace: true,
    restrict:"E",
    templateUrl:'../../templates/categorySelector.html',
    link: function(scope,element,attrs){
      scope.categories = Category.query();
      var activeCategory = {};

      scope.isActive =  function(category){
        return activeCategory && activeCategory.id === category.id;
      }

      scope.toggleCategory = function(category){
          activeCategory=category;


      }




    }
  }




}])
