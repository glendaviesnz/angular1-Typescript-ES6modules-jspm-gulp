/// <reference path="../../../tools/typings/tsd.d.ts" />
import {About} from './about-component';
// import 'angular-mocks';
describe('About', function(){

    var about = new About();
    /* beforeEach(angular.mockss.module('about', function ($provide) {
        $provide.value('bob', function(){console.log('test');});

    }));
    beforeEach(angular.mock.inject(function ($rootScope, bob) {
        var scope = $rootScope.$new();
        bob();
        //var controller = $controller('formDateFilterCtrl as dateFilter', {
          //  $scope: scope
        //});

    })); */
    it('Should add up', function(){
       expect(about.addUp(4, 5)).toBe(9);
    });
});
