
// let tasks = JSON.parse(localStorage.getItem("tasks")) || []; 

// // Add task function
// function addTask() {
//     let taskText = document.getElementById("taskInput").value.trim();
//     if (!taskText) {
//         alert("Please enter a task!"); 
//         return;
//     }
//     tasks.push(taskText); // Add task to array
//     document.getElementById("taskInput").value = ""; // Clear input field
//     localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to localStorage
//     displayTasks(); // Refresh the task list display
// }

// // Display tasks function
// function displayTasks() {
//     let taskList = document.getElementById("taskList");
//     taskList.innerHTML = ""; // Clears the list to avoid duplicates
//     tasks.forEach((task, index) => {
//         let li = document.createElement("li");
//         li.classList.add("task-item");
//         li.textContent = task;

//         // Add delete button
//         let deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.onclick = function() {
//             deleteTask(index);
//         };
//         li.appendChild(deleteBtn);
//         taskList.appendChild(li);
//     });
// }

// // Delete task function
// function deleteTask(index) {
//     tasks.splice(index, 1); // Remove task from array
//     localStorage.setItem("tasks", JSON.stringify(tasks)); // Update tasks in localStorage
//     displayTasks(); // Refresh task list
// }

// // Display tasks when the page loads
// document.addEventListener("DOMContentLoaded", function() {
//     displayTasks(); // Load tasks from localStorage and display them
// });
let tasks = [];
function addtask() {
    let tasktext = document.getElementById("input").value.trim();
    if (!tasktext) {alert("please enter task!");return;}

    tasks.push(tasktext);
    document.getElementById("input").value = "";
    displaytask();
}


function displaytask() {
    let taskList = document.getElementById("tasklist");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        li.classList.add("taskitem");

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deletetask(index);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
function deletetask(index) {
    tasks.splice(index, 1);
    displaytask();
}
