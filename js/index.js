let input = document.querySelector('#input');
let btn = document.querySelector('#addBtn');
let tasks = document.querySelector('#tasks');

let tasksArr = [];

function addTask() {
  tasks.innerHTML = '';

  tasksArr.forEach((e, i) => {
    tasks.innerHTML += `<div class="task ${e.completed && 'completed'}">
      ${e.text}
      <div class="bnts">
        <input id='${i}' type="checkbox" ${e.completed && 'checked'}/>
        <img id='${i}delete-btn' class="delete-btn" src="https://img.icons8.com/office/16/000000/delete-sign.png" />
      </div>
    </div>`;
  });
}

addTask();

btn.addEventListener('click', () => {
  if (input.value.length < 1) {
    alert('Вы не ввели задачу');
  } else {
    tasksArr.push({ text: input.value, completed: false });
    addTask();
  }
});
