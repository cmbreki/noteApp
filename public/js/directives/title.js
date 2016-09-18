angular.module("noteApp").directive('title',function($timeout){

return function(scope,element,attrs){
  $timeout(function(){
      $(element).tooltip()   //element.tooltip would work too
  });

 scope.$on('$destroy',function(){
   $(element).tooltip('destroy');
 })

}

});
