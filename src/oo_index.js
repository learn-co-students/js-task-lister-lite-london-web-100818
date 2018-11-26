
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  addElementsToFrom(form);
  
  const taskList = new TaskList();
  
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.showTask;
    form.reset();
  })
});

function addDurationField(form){
  const durationEl = document.createElement("input");
  durationEl.id = "duration";
  durationEl.placeholder = "duration";
  form.insertBefore(durationEl, document.querySelector("select"))
}

function addElementsToFrom(form){
  const btn = document.querySelector("#submit");
  form.insertBefore(createPriorityDropdown(),btn);
  addDurationField(form);
}

function createPriorityDropdown(){
  const selectEl = document.createElement("select");
  selectEl.id = "priority";
  selectEl.appendChild(createOption("high"));
  selectEl.appendChild(createOption("medium"));
  selectEl.appendChild(createOption("low"));
  return selectEl;
}

function createOption(name){
  const option = document.createElement("option");
  option.innerText = name;
  return option;
}
