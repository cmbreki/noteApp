angular.module('noteApp').factory('Category',function($resource){
  return $resource('/categories/');
});
