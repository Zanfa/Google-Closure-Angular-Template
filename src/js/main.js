/* global goog, angular */

goog.provide('app');

goog.require('app.sample');
goog.require('app.TodoController');

angular.module(['components'], ['TodoController'])
    .directive('appMain', function () {
        return {
            'restrict': 'E',
            'template': '<app-todo-controller></app-todo-controller>'
        };
    });

angular.module('App', ['components']);
