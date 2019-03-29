import Todos from './todos';
import AddTodo from './add-todo';

const App = () => {
  const $liClasses = document.querySelectorAll('.todo');
  Todos($liClasses);
  
  const $button = document.querySelector('button');
  $button.addEventListener('click', AddTodo);
}

// class App {
//   constructor() {
//     new Todos();
//     new AddTodo();
//   }
// }

document.addEventListener('DOMContentLoaded' , App);
