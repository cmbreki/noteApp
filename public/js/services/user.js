angular.module('noteApp').factory('User',function($resource){
  return $resource('/users/:id');
});
