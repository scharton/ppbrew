(function () {
    'use strict';

    var app = angular.module('app');

    app.directive('findUs', function () {
        return {
            scope: true,
            restrict: 'AE',
            templateUrl: 'findus.html',
            controllerAs: 'findus'
        }

    });


})();