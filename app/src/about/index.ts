import * as angular from 'angular';
import {routes}  from './routes';
import {aboutComponent} from './about-component';

var aboutModule: ng.IModule = angular.module('about', ['ui.router']);

aboutModule
    .config(routes)
    .directive('aboutComponent', aboutComponent);
export {aboutModule};
