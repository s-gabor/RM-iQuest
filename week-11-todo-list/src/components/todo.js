import toggleCompleted from '../helpers/toggle-completed';

class Todo {
    constructor(todo) {
        const $todoList = document.querySelector('.todos');
        const $newTodo = document.createElement('li');

        $newTodo.addEventListener('click', toggleCompleted);
        $newTodo.classList.add('todo');
        $newTodo.appendChild(document.createTextNode(todo));
        
        $todoList.appendChild($newTodo);
    }
}

export default Todo;
