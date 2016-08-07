angular.module('noteApp').config(function($routeProvider){
    $routeProvider
      .when('/',{
        redirectTo:'/notes'
      })
      .when('/notes',{
          templateUrl:"templates/notes-index.html",
          controller: "NoteIndexController"
      })

      .when('/notes/new',{
          templateUrl:"templates/notes-new.html",
          controller: "NoteCreateController"
      })
      .when('/notes/:id',{
          templateUrl:"templates/notes-show.html",
          controller: "NoteShowController"
      })
      .when('/notes/:id/edit', {
          templateUrl:"templates/notes-edit.html",
          controller: "NoteEditController"
      })

});
