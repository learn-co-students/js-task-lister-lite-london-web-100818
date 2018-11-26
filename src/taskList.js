const formEl = document.querySelector('#create-task-form');
const descInput = document.querySelector('#new-task-description');
const taskList = document.querySelector('#tasks');

const addTask = task => {
    const taskItem = document.createElement('li')
    
    taskItem.className = 'task-item'
    taskItem.id = task.id

    taskItem.innerHTML = `
    ${task.description}`
    
    taskList.appendChild(taskItem)
}
    
const addTasks = tasks => {
    tasks.forEach(task => addTask(task))
}

formEl.addEventListener('submit', (event) => {
        event.preventDefault()
        task = {
            description: descInput.value
        }
        createTask(task)
            .then(serverTask => addTask(serverTask))

        formEl.reset()
    })

const getTasks = () =>
    fetch('http://localhost:3000/tasks')
        .then(resp => resp.json())

const createTask = task => 
    fetch('http://localhost:3000/tasks', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    })
    .then(resp => resp.json())

getTasks()
    .then(tasks=> addTasks(tasks))