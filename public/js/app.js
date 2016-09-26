angular.module('noteApp', ['ngRoute','ngResource' ,'ngMaterial', 'ngMessages', 'material.svgAssetsCache']).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('lime')
    .accentPalette('purple')
    .warnPalette('red');
});
