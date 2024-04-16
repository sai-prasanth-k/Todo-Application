let todoItemsContainer = document.getElementById("todoItemsContainer");
let buttonEl = document.getElementById("addTodoButton");
let todoUserInputEl = document.getElementById("todoUserInput");

let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];

let todosCount = todoList.length;

function onStrikeThrough(checkboxId, labelId) {
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("strike-through");
}

function onDelete(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let todoId = 'todo' + todo.uniqueNo;
    let checkboxId = 'checkbox' + todo.uniqueNo;
    let labelId = 'label' + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onStrikeThrough(checkboxId, labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.id = labelId;
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {
        onDelete(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function onAddTodo() {
    let userInputContainer = document.getElementById("todoUserInput");
    let userInputValue = userInputContainer.value;

    if (userInputValue === "") {
        alert("Entered Invalid input");
        return;
    } else {
        todosCount = todosCount + 1;
        let newInput = {
            text: userInputValue,
            uniqueNo: todosCount
        };
        createAndAppendTodo(newInput);
        userInputContainer.value = "";
    }
}
buttonEl.onclick = function() {
    onAddTodo();
};