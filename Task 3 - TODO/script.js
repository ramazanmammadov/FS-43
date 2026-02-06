const todoList = [
  { id: 1, task: "Finish coding assignment", completed: false },
  { id: 2, task: "Schedule dentist appointment", completed: true },
  { id: 3, task: "Write report for project meeting",completed: false},
];

const container = document.getElementById("todoContainer");
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");

  function renderTodos() {
    todoContainer.innerHTML = "";

    todoList.forEach(todo => {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";

      const taskText = document.createElement("span");
      taskText.textContent = todo.task;

      if (todo.completed) {
        taskText.classList.add("completed");
      }

      const editBtn = document.createElement("button");
      editBtn.textContent = "EDIT";
      editBtn.className = "edit";
      editBtn.onclick = () => editTodo(todo.id);

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "COMPLETED";
      completeBtn.className = "complete";
      completeBtn.onclick = () => toggleComplete(todo.id);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "DELETE";
      deleteBtn.className = "delete";
      deleteBtn.onclick = () => deleteTodo(todo.id);

      todoItem.appendChild(taskText);
      todoItem.appendChild(editBtn);
      todoItem.appendChild(completeBtn);
      todoItem.appendChild(deleteBtn);

      todoContainer.appendChild(todoItem);
    });
  }

  function addTodo() {
    const taskValue = todoInput.value.trim();
    if (taskValue === "") return;

    const newTodo = {
      id: Date.now(),
      task: taskValue,
      completed: false,
    };

    todoList.push(newTodo);
    todoInput.value = "";
    renderTodos();
  }

  function editTodo(id) {
    const todo = todoList.find(item => item.id === id);
    const newTask = prompt("Edit task:", todo.task);
    if (newTask) {
      todo.task = newTask;
      renderTodos();
    }
  }

  function toggleComplete(id) {
    const todo = todoList.find(item => item.id === id);
    todo.completed = !todo.completed;
    renderTodos();
  }

  function deleteTodo(id) {
    const index = todoList.findIndex(item => item.id === id);
    todoList.splice(index, 1);
    renderTodos();
  }

  addBtn.addEventListener("click", addTodo);

  renderTodos();