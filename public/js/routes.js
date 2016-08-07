angular.module('noteApp').config(function($routeProvider){
    $routeProvider
      .when('/',{
        redirectTo:'/notes'
      })
      .when('/notes',{
          templateUrl:"templates/notes-index.html"
          controller: "NotesIndexController"
      })

      .when('/notes/new',{
          templateUrl:"templates/notes-new.html"
          controller: "NotesCreateController"
      })
      .when('/notes/:id',{
          templateUrl:"templates/notes-show.html"
          controller: "NotesShowController"
      })
      .when('/notes/:id/edit',{
          templateUrl:"templates/notes-edit.html"
          controller: "NotesEditController"
      })

});
