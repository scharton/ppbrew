(function() {
  'use strict';
 var app = angular.module('app', []);
  app.controller('ctrl', function() {
    var vm = this;
    vm.name = "Pine and Palm Brewing";
    vm.address = {
      street: "352 W. Bedford Ave., #111",
      city: "Fresno",
      state: "CA",
      zip: "93711"
    };
    vm.phone = "(559) 970-7580";
    vm.email = "pineandpalmbrewing@gmail.com";
    vm.facebook = "https://www.facebook.com/PineandPalm";
    vm.instagram = "https://www.instagram.com/pineandpalmbrew/";
  });
  
})();