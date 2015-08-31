/// <reference path="../../../tools/typings/tsd.d.ts" />
function aboutComponent() {
    'use strict';
    return {
        restrict: 'E',
        scope: {},
        controller: About,
        controllerAs: 'about',
        bindToController: true,
        templateUrl: 'src/about/about.html'
    };
}
class About {

    constructor () {
        console.log('I am the about component! I know what I am about!');

    }

    testMethod () {
        console.log('who clicked me!');
    }

    addUp (a: number, b: number) {
        return a  + b;
    }
}

export {aboutComponent, About};
