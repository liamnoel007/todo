let input = document.querySelector('#input');
let addTask = document.querySelector('#addBtn');
let tasks = document.querySelector('#tasks');

let tasksArray = [
  { text: 'Купить пиццу', completed: true },
  { text: '12', completed: true },
];

function displayTasks() {
  tasks.innerHTML = '';

  tasksArray.forEach((element, i) => {
    tasks.innerHTML += `<div class="task ${element.completed && 'completed'}">
    ${element.text}
    <div class="bnts">
      <input id='${i}' type="checkbox" ${element.completed && 'checked'}/>
      <img id='${i}delete-btn' class="delete-btn" src="https://img.icons8.com/office/16/000000/delete-sign.png" />
    </div>
  </div>`;
  });
}

displayTasks();

addTask.addEventListener('click', () => {
  tasksArray.push({ text: input.value, completed: false });
  displayTasks();
});
