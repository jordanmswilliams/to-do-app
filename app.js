function onReady() {

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const removeTask = document.createElement('input');

  addToDoForm.addEventListener('submit', () => {
        event.preventDefault();

        // Get to-do input value
        let title = newToDoText.value;

        // Create a new line-item
        let newLi = document.createElement('li');

        // Create a new input
        let checkbox = document.createElement('input');

        let deleteButton = document.createElement('button')

        // Set the input's type to checkbox
        checkbox.type = "checkbox";

        // Add to-do value to new line-item
        newLi.textContent = title;

        // Append the checkbox to the line-item
        newLi.appendChild(checkbox);


        // Add a 'remove' button to the line-item
        removeTask.setAttribute('type', 'button');
        removeTask.setAttribute("value", "Remove");
        removeTask.setAttribute("id", "removeButton");
        removeTask.addEventListener('click', function(e) {
          newLi.parentNode.removeChild(newLi);
            }, false);
        newLi.appendChild(removeTask);

        // attach the li to the ul
        toDoList.appendChild(newLi);

        //empty the input
        newToDoText.value = '';
  });
 }

// Execute function onReady when page is loaded
window.onload = function() {
   onReady();
 };
