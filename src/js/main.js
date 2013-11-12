/* global goog */

goog.provide('app');

goog.require('app.sample');

function sayHi() {
    app.sample();
}

goog.exportSymbol('sayHi', sayHi);