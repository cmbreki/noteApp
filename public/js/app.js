angular.module('noteApp', ['ngRoute','ngResource', 'ngGravatar']).config(function(GravatarProvider){
  GravatarProvider.setSize(100);
});
