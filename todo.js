
function addList() {
    const todo = document.getElementById("todo");
    const value = todo.value;

    if (value.trim() !== "") {
        const ul = document.getElementById("todoList");

        // Create a container for the task and delete button
        const taskContainer = document.createElement("div");
        taskContainer.className = "flex justify-between "; // Use Tailwind CSS classes for styling

        // Create a list item
        const li = document.createElement("li");
        li.textContent = value;


        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete"; 
        deleteButton.className = " mr-6 mb-3 text-red-400";
        deleteButton.onclick = function () {
            ul.removeChild(taskContainer);
        };

        // Append the list item and delete button to the container
        taskContainer.appendChild(li);
        taskContainer.appendChild(deleteButton);

        // Append the container to the unordered list
        ul.appendChild(taskContainer);

        // Add margin to the bottom of the li element for space
        li.style.marginBottom = "10px";

        // Clear the input field
        todo.value = "";
    }
}

function deleteAll(){
    const ul = document.getElementById("todoList");
    ul.innerHTML="";
}