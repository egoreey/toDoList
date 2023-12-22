var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todoInput = document.getElementById('new-todo');
        this.todoList = document.getElementById('todo-list');
    }
    TodoList.prototype.createTodoItem = function (todoText) {
        var newTodoItem = document.createElement('li');
        newTodoItem.className = 'todo-item';
        newTodoItem.innerHTML = "\n      <input type=\"checkbox\">\n      <span>".concat(todoText, "</span>\n      <button class=\"delete-btn\" onclick=\"todoListApp.deleteTodo(this)\">Delete</button>\n    ");
        return newTodoItem;
    };
    TodoList.prototype.addTodo = function () {
        var todoText = this.todoInput.value.trim();
        if (todoText !== '') {
            var newTodoItem = this.createTodoItem(todoText);
            this.todoList.appendChild(newTodoItem);
            this.todoInput.value = '';
        }
    };
    TodoList.prototype.deleteTodo = function (btn) {
        var todoItem = btn.parentNode;
        this.todoList.removeChild(todoItem);
    };
    return TodoList;
}());
var todoListApp = new TodoList();
