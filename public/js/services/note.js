angular.module('noteApp').factory('Note',function($resource){
  return $resource('/notes/:id', {id:"@id"},{

      //custom update method
      update:{
        method:"PUT"        
      }


  } );

});
