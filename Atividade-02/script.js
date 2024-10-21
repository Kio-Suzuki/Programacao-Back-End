function addTask() {
  let taskInput = document.getElementById("task");
  let task = taskInput.value;
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let dayOfWeek = date.getDay();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let dateFormatted = `${daysOfWeek[dayOfWeek]}, ${day} ${months[month]}`;
  let dateId = `${day}-${month}-${year}`;

  if (task === '') {
    alert('Error: Task cannot be empty');
    return;
  }

  let newTask = document.createElement("li");
  let text = document.createTextNode(task);
  newTask.appendChild(text);
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newTask.appendChild(span);

  let existingList = document.getElementById(dateId);
  if (existingList) {
    existingList.appendChild(newTask);
  } else {
    let newList = document.createElement("ul");
    newList.id = dateId;
    let listTitle = document.createElement("h3");
    listTitle.textContent = dateFormatted;
    newList.appendChild(listTitle);
    newList.appendChild(newTask);
    document.getElementById("task-container").appendChild(newList);
  }

  taskInput.value = '';

  span.onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

document.getElementById("task-container").addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() === 'li') {
    let doneList = document.getElementById("done-list");
    if (!doneList) {
      doneList = document.createElement("ul");
      doneList.id = "done-list";
      const listTitle = document.createElement("h3");
      listTitle.textContent = "Done";
      doneList.appendChild(listTitle);
      document.getElementById("completed-container").appendChild(doneList);
    }
    e.target.dataset.originalListId = e.target.parentNode.id;
    e.target.parentNode.removeChild(e.target);
    doneList.appendChild(e.target);
  }
}, false);

document.getElementById("completed-container").addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() === 'li') {
    let originalListId = e.target.dataset.originalListId;
    let originalList = document.getElementById(originalListId);
    if (originalList) {
      e.target.parentNode.removeChild(e.target);
      originalList.appendChild(e.target);
    }
  }
}, false);

function clearTasks() {
  document.getElementById("task-container").innerHTML = '';
  document.getElementById("done-list").innerHTML = '';
}

