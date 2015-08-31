/// <reference path="../../tools/typings/tsd.d.ts" />
import * as angular from 'angular';
import 'angular-ui-router';
import {routes} from './layout/routes';
import './about/index';

var app = angular.module('app', ['ui.router', 'about']);
app.config(routes);
// need to add custom exception handler in order for sourcemaps back to typescript to work
app.config(['$provide', function($provide: ng.IModule) {
    $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate: any) {
        return function (exception: Error, cause: string) {
            setTimeout(function () {
                throw exception;
            });
            $delegate(exception, cause);
        };
    }]);
}]);

export {app};
