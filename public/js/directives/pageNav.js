angular.module('noteApp').directive('pageNav',function(){
  return{
    replace:true,
    restrict:'E',
    templateUrl:'../../templates/pageNav.html'
  }
});
