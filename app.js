function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm')
  const newToDoText = document.getElementById('newToDoText');
  const newToDo = document.createElement('li');

  function createNewToDo(){
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      let deleteButton = document.createElement('button')
      deleteButton.textContent = 'delete'

      newLi.appendChild(deleteButton)

      deleteButton.addEventListener('click', () => {
        deleteToDo(toDo.id);
        renderTheUI();

      });

    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();

  function deleteToDo(id){
    toDos.filter[toDos = toDos.filter(item => item.id !==id)]
  }
}

window.onload = function() {
  onReady();
};
