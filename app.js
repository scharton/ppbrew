(function () {
    'use strict';
    var app = angular.module('app', []);
    app.controller('ctrl', function (strings) {
        var vm = this;
        vm.headtitle = strings.headtitle;
        vm.name = strings.name;
        vm.address = strings.address;
        vm.phone = strings.phone;
        vm.email = strings.email;
        vm.facebook = strings.facebook;
        vm.instagram = strings.instagram;
        vm.gatrackingid = strings.gatrackingid;
    });

})();