/*angular.module('noteApp').config(function($routeProvider){
    $routeProvider
      .when('/',{
        redirectTo:'/intro'
      })
      .when('/intro',{
        templateUrl:"templates/notes-intro.html",
        controller: "NoteIntroController"
      })

      .when('/notes/',{
          templateUrl:"templates/notes-index.html",
          controller: "NoteIndexController"
      })
    /*  .when('/notes/:category',{
            templateUrl:"templates/notes-index.html",
            controller: "NoteIndexController"
        }) */

    /*  .when('/notes/new',{
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
 */

angular.module('noteApp').config(function config($stateProvider){

  $stateProvider.state("intro",{
    url:"/",
    controller:"NoteIntroController as noteIntroCtrl",
    templateUrl:"templates/notes-intro.html"
  })
  $stateProvider.state("notes",{
    url:"/notes",
    controller:"NoteIndexController as noteIndexCtrl",
    templateUrl:"templates/notes-index.html"
  })
  $stateProvider.state("new",{
    url:"/new",
    controller:"NoteCreateController as noteCreateCtrl",
    templateUrl:"templates/notes-new.html"
  })
  $stateProvider.state('details',{
      url:"/notes/:id",
      params:{
      				id: null,
      			},
      controller: "NoteShowController",
      templateUrl:"templates/notes-show.html"

  })

})
