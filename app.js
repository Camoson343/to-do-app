function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addNewToDoForm')
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
function createNewToDo(){
  if (!newToDoText.value) { return; }

  toDos.push({
    title: newToDoText.value,
    complete: false
  });

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.vaule = '';
  });

  renderTheUI();
}

function renderTheUI(){
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo){
    const newToDo = document.createElement('li');

       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";

       const title = document.createElement('span');
       title.textContent = toDo.title;

       toDoList.appendChild(newLi);
       newLi.appendChild(checkbox);

  });
}
}

window.onload = function() {
  onReady();
};
