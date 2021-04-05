let todoInput;
let pendingTodos;

function* getTodoColorClassStyles() {
  const todoColorClassStyles = [
    "postit-pink",
    "postit-skyblue",
    "postit-yellow",
    "postit-green",
    "postit-purple"
  ];
  while (true) {
    shuffleArray(todoColorClassStyles);
    for (const bgStyle of todoColorClassStyles) {
      yield bgStyle;
    }
  }
}
const colorGenerator = getTodoColorClassStyles();

window.onload = init;

function init() {
  console.log('Todo App');
  
  todoInput = $('#todoText');
  pendingTodos = $('#pendingTodos');
  
  todoInput.keypress(function (e) {
    const enterPressed = e.key === 'Enter';
    if (enterPressed) saveTodo();
  });
  
  const btnSave = $('#btnSave');
  btnSave.click(saveTodo);
}

function saveTodo() {
  const todoText = todoInput.val();
  const noTodo = todoText === "";
  if (noTodo) return;

  console.log("saveTodo", todoText);
  const todo = createTodo(todoText);

  pendingTodos.append(todo);
  todoInput.val("").focus();
}

function createTodo(todoText) {
  const bgSytleClass = colorGenerator.next().value;
  const escapedTodoText = escapeHtml(todoText);
  const todoCard = `
    <div class="card todo-card ${bgSytleClass}">
      <h5>${escapedTodoText}</h5>
    </div>
  `;
  console.log("createTodo", todoCard);
  return todoCard;
}

// Utility
// Fucntion to shuffle the array content
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      // Generate random number 
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function escapeHtml(unsafe) {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}
// <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*">