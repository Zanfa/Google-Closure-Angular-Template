describe('todo list', function() {

  var todoList;

  beforeEach(function() {
      browser.get('http://localhost:8000/');

      todoList = element.all(by.repeater('todo in todos'));
  });

  it ('should display 2 todos', function () {
      expect(todoList.count()).toEqual(2);
  });

  it ('should add a third todo', function () {
      var addTodo = element(by.model('formTodoText'));
      var addButton = element(by.id('add-todo'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
  });

  it ('should clear checked todos', function () {
      var clearButton = element(by.id('clear-todos'));
      var firstCheckbox = todoList.get(0).findElement(by.tagName('input'));

      // Check for none checked
      clearButton.click();
      expect(todoList.count()).toEqual(2);

      firstCheckbox.click();
      clearButton.click();
      expect(todoList.count()).toEqual(1);
  });
});
