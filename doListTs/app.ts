class TodoList {
    private todoInput: HTMLInputElement;
    private todoList: HTMLUListElement;

    constructor() {
        this.todoInput = document.getElementById('new-todo') as HTMLInputElement;
        this.todoList = document.getElementById('todo-list') as HTMLUListElement;
    }

    private createTodoItem(todoText: string): HTMLLIElement {
        const newTodoItem = document.createElement('li');
        newTodoItem.className = 'todo-item';
        newTodoItem.innerHTML = `
      <input type="checkbox">
      <span>${todoText}</span>
      <button class="delete-btn" onclick="todoListApp.deleteTodo(this)">Delete</button>
    `;
        return newTodoItem;
    }

    public addTodo() {
        const todoText = this.todoInput.value.trim();

        if (todoText !== '') {
            const newTodoItem = this.createTodoItem(todoText);
            this.todoList.appendChild(newTodoItem);
            this.todoInput.value = '';
        }
    }

    public deleteTodo(btn: HTMLButtonElement) {
        const todoItem = btn.parentNode as HTMLLIElement;
        this.todoList.removeChild(todoItem);
    }
}

const todoListApp = new TodoList();
