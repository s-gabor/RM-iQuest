import Todo from "./todo";

class AddToDo {
    constructor() {
        const $button = document.querySelector('button');
        $button.addEventListener('click', () => {
            const $input = document.querySelector('input[name="new-todo"]');
            new Todo($input.value);
        });
    }
}

export default AddToDo;
