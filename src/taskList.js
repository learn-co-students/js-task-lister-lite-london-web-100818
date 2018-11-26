class TaskList {
    constructor (){
        this.input = document.querySelector("#new-task-description");
        this.duration = document.querySelector("#duration");
        this.tasks = document.querySelector("#tasks");
        this.priority = document.querySelector("#priority");
        this.high = [];
        this.low = [];
        this.medium = [];
    }

    get showTask(){
        const liEl = this.createListElement()
        this.addAllElementsToList(); 
    }

    createListElement(){
        const liEl = document.createElement("li");
        const task = this.createNewTask();
        liEl.innerText = task.task + " Duration: " + task.duration;
        this.styleElement(liEl);
        liEl.appendChild(this.createDeleteButton(liEl));
        return liEl;
    }

    styleElement(element){
        if(this.priority.value === "high"){
            this.high.push(element);
            element.style = "background-color: red;"
        } else if(this.priority.value === "medium"){
            this.medium.push(element);
            element.style = "background-color: yellow;"
        } else if(this.priority.value === "low"){
            this.low.push(element);
            element.style = "background-color: green;"
        }
    }

    createNewTask(){
        return new Task(this.input.value, this.duration.value);
    }

    addAllElementsToList(){
        this.addElementToList(this.high);
        this.addElementToList(this.medium);
        this.addElementToList(this.low);
    }

    addElementToList(array){
        for(const li of array){
            this.tasks.appendChild(li);
        }
    }

    createDeleteButton(listElement){
        const btn = document.createElement("button");
        btn.innerText = "X";
        btn.addEventListener("click", () => {
            listElement.remove();
        })
        return btn;
    }

   
    
}
