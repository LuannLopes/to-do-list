const button = document.querySelector(".add-task-button");
const input = document.querySelector(".task-input");

let listOfItems = [];

function addTask() {
  listOfItems.push(input.value);
}

button.addEventListener("click", addTask);
