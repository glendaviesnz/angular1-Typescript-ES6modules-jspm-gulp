/// <reference path="../../../tools/typings/tsd.d.ts" />
import {About} from './about-component';

describe('About', function(){

    var about = new About();

    it('Should add up', function(){
       expect(about.addUp(4, 5)).toBe(9);
    });

});
