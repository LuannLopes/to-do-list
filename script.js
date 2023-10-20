const button = document.querySelector(".add-task-button");
const input = document.querySelector(".task-input");
const fullList = document.querySelector(".tasks");

let listOfItems = [];

function addTask() {
  listOfItems.push(input.value);
  showTask();
}

function showTask() {
  let newLi = "";
  listOfItems.forEach((tarefa) => {
    newLi =
      newLi +
      `<li class="to-do-items">
    <button class="rocket-button">
        <i class="fa-solid fa-rocket"></i>
    </button>
    <p class="task-name">${tarefa}</p>
    <button class="trash-can-button">
        <i class="fa-solid fa-trash"></i>
    </button>
</li>`;
  });
  fullList.innerHTML = newLi;
}

button.addEventListener("click", addTask);
