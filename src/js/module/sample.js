/* global goog */

goog.provide('app.sample');

goog.require('goog.dom');

app.sample = function() {
    var newHeader = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
        'Hello world!');
    goog.dom.appendChild(document.body, newHeader);
};