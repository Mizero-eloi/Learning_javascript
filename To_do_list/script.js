// Getting add todo button from HTML 
const add_todo = document.getElementById("add_todo");

// Getting the pop-up form 
const popup_form = document.getElementById("popup_form");
const submit_button = document.getElementById("submit_button");
const todo_container = document.getElementById("todo_container");
const doing_container = document.getElementById("doing_container");
const done_container = document.getElementById("done_container");

// Handling the onclick event on add_todo button
add_todo.onclick = () => {
    popup_form.style.display = "block";
}

// Getting the close button
const close = document.getElementById("close");

// Handling the onclick button on the close button
close.onclick = () => {
    popup_form.style.display = "none";
}

// Handling the form
submit_button.onclick = (e) => {
    // Stopping the page from reloading
    e.preventDefault();

    // Getting the data from the form 
    const todoInput = document.getElementById("todo").value;
    
    if (todoInput) {
        const newTodoItem = document.createElement("div");
        newTodoItem.classList.add("todo-item");
        newTodoItem.innerHTML = `<p>${todoInput}</p>`;

        // Append the new todo item to the todo container
        todo_container.appendChild(newTodoItem);

        // Clear the form input
        document.getElementById("todo").value = "";

        // Close the form 
        popup_form.style.display = "none";

        // Set up the click event for the new todo item
        newTodoItem.onclick = () => {
            // Move to doing_container
            newTodoItem.className = "doing-item";
            doing_container.appendChild(newTodoItem);

            // Set up click event for moving to done_container
            newTodoItem.onclick = () => {
                // Move to done_container
                newTodoItem.className = "done-item";
                done_container.appendChild(newTodoItem);

                // Set up click event for deletion
                newTodoItem.onclick = () => {
                    // Remove the item from the DOM
                    newTodoItem.remove();
                };
            };
        };
    }
}
