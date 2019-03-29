import toggleCompleted from '../helpers/toggle-completed';

const Todos = (todos) => {
  todos.forEach(todo => {
    todo.addEventListener('click', toggleCompleted);
  });
}

// class Todos {
//   constructor() {
//     new Todo();
//   }
// }

export default Todos;
