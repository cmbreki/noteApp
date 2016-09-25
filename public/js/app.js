angular.module('noteApp', ['ngRoute','ngResource' ,'ngMaterial']).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
});
