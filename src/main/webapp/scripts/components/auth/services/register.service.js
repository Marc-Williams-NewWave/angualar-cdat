'use strict';

angular.module('cdatApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


