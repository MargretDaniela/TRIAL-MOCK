// //Create a basic To-Do List application using HTML, CSS, and JavaScript. The project should allow users to:
// let tasks =[] //Store tasks
// // Add tasks
// function addTask(){
//     let taskText = document.getElementById("taskInput").value.trim();
//     if (!taskText) {alert ("Please enter the task!"); 
//         return;
//     }
//     tasks.push(taskText);// Add task to array
//     document.getElementById("taskInput").value = ""//Clear the input
//     displayTasks();// Refresh inputs
//     //To Do add a task to an array, clear input ,and call displayTasks()
// }
// //display task
// function displayTasks(){
//     let taskList = document.getElementById("taskList");
//     taskList.innerHTML = ""; // Clears the list
//     tasks.forEach((task, index)=>{
//         let li = document.createElement("li");
//         li.classList.add("task-item");
//         li.textContent = task;

//         //add delete button
//         let deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "";
//         deleteBtn.style.marginLeft = "10px";
//         deleteBtn.onclick = function(){
//             deleteTask(index);
//         };
//         li.appendChild(deleteBtn);
//         taskList.appendChild(li);
//     });
//     //TO DO ;Loop through task array, <li> elements and add delete button
// }

// //Delete task
// function deleteTask(index){
//     tasks.splice(index, 1);// Remove task
//     displayTasks;//Refresh list
//     //TO DO ;remove task using splice and refresh list
// }
let tasks = []; // Store tasks

// Add tasks
function addTask() {
    let taskText = document.getElementById("taskInput").value.trim();
    if (!taskText) {
        alert("Please enter a task!"); 
        return;
    }
    tasks.push(taskText); // Add task to array
    document.getElementById("taskInput").value = ""; // Clear the input
    displayTasks(); // Refresh tasks display
}

// Display tasks
function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clears the list
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.classList.add("task-item");
        li.textContent = task;

        // Add delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
            deleteTask(index);
        };
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from array
    displayTasks(); // Refresh task list
}