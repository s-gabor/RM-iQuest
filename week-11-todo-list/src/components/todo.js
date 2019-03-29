import toggleCompleted from '../helpers/toggle-completed';

const Todo = (todo) => {
    const $todoList = document.querySelector('.todos');

    const $newTodo = document.createElement('li');

    $newTodo.addEventListener('click', toggleCompleted);
    $newTodo.classList.add('todo');
    $newTodo.appendChild(document.createTextNode(todo));
    
    $todoList.appendChild($newTodo);
}

// class Todo {
//     // code here
// }

export default Todo;
