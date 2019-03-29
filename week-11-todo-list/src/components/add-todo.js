import Todo from "./todo";

const AddToDo = () => {
    const $input = document.querySelector('input[name="new-todo"]');
    Todo($input.value);
}

// class AddToDo {
//     // code here
// }

export default AddToDo;