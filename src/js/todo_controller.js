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

        /** @expose */
        $scope.formTodoText = '';

        // Create some placeholder todos
        /** @expose */
        $scope.todos = [
            {'text': 'Todo One'},
            {'text': 'Todo Two'}
        ];

        /** @expose */
        $scope.addTodo = function () {
            $scope.todos.push(
                {
                    'text': $scope['formTodoText'],
                    'done': false
                }
            );

            $scope.formTodoText = '';
        };

        /** @expose */
        $scope.clearCompleted = function () {
            $scope.todos = _.filter($scope.todos, function(todo) {
                return !todo['done'];
            });
        };
    }]);