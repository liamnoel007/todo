let input = document.querySelector('#input');
let addTask = document.querySelector('#addBtn');
let tasks = document.querySelector('#tasks');
let count1 = document.querySelector('#count1');
let count2 = document.querySelector('#count2');

let tasksArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

function displayTasks() {
  tasks.innerHTML = '';

  tasksArray.forEach((element, i) => {
    count1.value = i + 1;
    tasks.innerHTML += `<div class="task ${element.completed && 'completed'}">
    ${element.text}
    <div class="bnts">
      <input id='${i}' type="checkbox" ${element.completed && 'checked'}/>
      <img id='${i}delete-btn' class="delete-btn" src="https://img.icons8.com/office/16/000000/delete-sign.png" />
    </div>
  </div>`;
  });

  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

displayTasks();

function addCount() {}

addTask.addEventListener('click', () => {
  if (input.value.length < 1) {
    alert('Вы не ввели задачу');
  } else {
    tasksArray.push({ text: input.value, completed: false });
    displayTasks();
  }
});

tasks.addEventListener('click', (e) => {
  if (e.target.type === 'checkbox') {
    tasksArray[e.target.id].completed = !tasksArray[e.target.id].completed;
  } else if (e.target.className === 'delete-btn') {
    tasksArray.splice(e.target.id[0], 1);
    count1.value -= 1;
  }
  displayTasks();
});
