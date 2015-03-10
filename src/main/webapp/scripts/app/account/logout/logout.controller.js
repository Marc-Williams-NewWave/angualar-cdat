'use strict';

angular.module('cdatApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
