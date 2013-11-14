'use strict';

goog.require('app.sample');

describe('Example', function(){

    it('should have 1+1 equal 2', function() {
        expect(1+1).toEqual(2);
    });

    it('should app.sample should return true', function() {
        expect(app.sample()).toEqual(true);
    });

});