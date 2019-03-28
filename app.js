function onReady(){
 // let toDos = [];
 // let toDoId = 1;
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = NEW_TODO_TEXT.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";


    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
  deleteBtn.className = 'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent';
  componentHandler.upgradeElement(deleteBtn);
  document.getElementById('container').appendChild(deleteBtn);


    deleteBtn.addEventListener('click', function(event){
      let buttonLiText = this.parentElement.childNodes[0].textContent;
      TODO_LIST.removeChild(this.parentElement);
    })

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);

    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";
  });
};

window.onload = function() {
  onReady();
};
