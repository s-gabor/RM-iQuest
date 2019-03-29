import Todos from './todos';
import AddTodo from './add-todo';

class App {
  constructor() {
    new Todos();
    new AddTodo();
  }
}

document.addEventListener('DOMContentLoaded' , () => {
  new App();
});
