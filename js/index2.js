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

tasks.addEventListener('click', (e) => {
  if (e.target.type === 'checkbox') {
    tasksArray[e.target.id].completed = !tasksArray[e.target.id].completed;
  } else if (e.target.className === 'delete-btn') {
    console.log(e.target.id[0]);
    tasksArray.splice(e.target.id[0], 1);
  }
  displayTasks();
});
