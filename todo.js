let task = []


function displayTasks(){
    let tasks=prompt("Enter in a task");
    task.push(tasks);
    displayTodo();
}

function displayTodo(){

    document.getElementById("task-list").innerHTML="";

    for(let x=0;x<task.length; x++){
        document.getElementById("task-list").innerHTML+=(`
        <li id="${x}"> ${task[x]} <button onclick="deleteTask(${x});"> Completed</button></li>`)
    }
}

displayTodo();

function deleteTask(id){
    document.getElementById(id).remove();
    task.splice(id,1);
}
