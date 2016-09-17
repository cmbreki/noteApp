angular.module('noteApp').directive('pageNav',function(){
  return{
    replace:true,
    restrict:'E',
    templateUrl:'../../templates/pageNav.html',
    controller: function($scope,$location){
      $scope.isPage = function(name){
        return new RegExp("/"+ name + "($|/)").test($location.path())
      };
    }
  };
});
