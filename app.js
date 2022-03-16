// Selectors
const $todoInput = document.querySelector(".todo-input");
const $todoBtn = document.querySelector(".todo-button");
const $todoList = document.querySelector(".todo-list");
const $filterOption = document.querySelector(".filter-todo");


// Event Listeners
$todoBtn.addEventListener('click', addTodo);
$todoList.addEventListener('click', deleteCheck);
$filterOption.addEventListener('click', filterTodo)


// Functions
function addTodo(event) {
    //prevent default
    event.preventDefault();
    // todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = $todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fas fa-check"></i>`
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    $todoList.appendChild(todoDiv);
    // make input empty
    $todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    //Delete
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        // 애니메니션 이후 삭제
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    // Check
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(event) {
    const todos = $todoList.childNodes;
    // console.log(event.target.value)
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none'
                };
                break;
            case "uncompleted":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'none';
                } else {
                    todo.style.display = 'flex'
                };


        }
    });
}