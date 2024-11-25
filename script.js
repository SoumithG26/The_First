// Handle login
const loginForm = document.getElementById("login-form");
const dashboard = document.getElementById("dashboard");
const loginSection = document.getElementById("login-section");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login successful!");
        loginSection.style.display = "none";
        dashboard.style.display = "block";
    } else {
        alert("Please enter valid credentials.");
    }
});

// Handle task management
const taskList = document.getElementById("task-list");
const addTask = () => {
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value.trim();

    if (task) {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        taskList.appendChild(listItem);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
};
