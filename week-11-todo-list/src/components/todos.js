import toggleCompleted from '../helpers/toggle-completed';

class Todos {
  constructor() {
    // new Todo();
    const todos = document.querySelectorAll('.todo');
    todos.forEach(todo => {
      todo.addEventListener('click', toggleCompleted);
    });
  }
}

export default Todos;
