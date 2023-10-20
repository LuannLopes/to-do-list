const button = document.querySelector(".add-task-button");
const input = document.querySelector(".task-input");
const fullList = document.querySelector(".tasks");

let listOfItems = [];

function addTask() {
  listOfItems.push({
    task: input.value,
    completed: false,
  });

  input.value = "";

  showTask();
}

function showTask() {
  let newLi = "";

  listOfItems.forEach((item, index) => {
    newLi =
      newLi +
      `<li class="task ${item.completed && "done"}">
    <button class="rocket-button" onclick="completeTask(${index})">
        <i class="fa-solid fa-rocket"></i>
    </button>
    <p class="task-name">${item.task}</p>
    <button class="trash-can-button" onclick="deleteTask(${index})">
        <i class="fa-solid fa-trash"></i>
    </button>
       </li>`;
  });

  fullList.innerHTML = newLi;

  localStorage.setItem("list", JSON.stringify(listOfItems));
}

function completeTask(index) {
  listOfItems[index].completed = !listOfItems[index].completed;

  showTask();
}

function deleteTask(index) {
  listOfItems.splice(index, 1);

  showTask();
}

function reloadTasks() {
  const localStorageTasks = localStorage.getItem("list");

  if (localStorageTasks) {
    listOfItems = JSON.parse(localStorageTasks);
  }

  showTask();
}

reloadTasks();

button.addEventListener("click", addTask);
