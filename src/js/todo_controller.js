/* global goog, angular */
goog.provide('app.TodoController');

angular.module(['TodoController'], [])
    .directive('appTodoController', function () {
        return {
            'restrict': 'E',
            'templateUrl': 'templates/todo_controller.html'
        };
    })
    .controller('app.TodoController', ['$scope', function($scope) {

        // Create some placeholder todos
        $scope['todos'] = [
            {'text': 'Todo One'},
            {'text': 'Todo Two'}
        ];

        $scope['addTodo'] = function () {
            $scope['todos'].push(
                {
                    'text': $scope['formTodoText'],
                    'done': false
                }
            );

            $scope['formTodoText'] = '';
        };

        $scope['clearCompleted'] = function () {
            $scope['todos'] = _.filter($scope['todos'], function(todo) {
                return !todo['done'];
            });
        };
    }]);