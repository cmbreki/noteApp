angular.module('noteApp').factory('Note',function($resource){
  return $resource('/notes');

});
