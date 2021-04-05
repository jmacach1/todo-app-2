// get element button id= btnSave
// add event listener click to btnSave, saveTodo 
//    get element input[text] id= todoText
//    get element div id= todoListDisplay
//    get text from todoText
//    create element todo - 
//    add element todo to todoListDisplay 

function saveTodo() {
  const todoInput = $('#todoText')
  const todoText = todoInput.val();
  if (todoText === "") return;
  console.log("saving Todo");
  const todo = `
    <div class="card todo-card">
      <h6>${todoText}</h6>
    </div>
  `;
  console.log("todo", todo);
  const pendingTodos = $('#pendingTodos');
  pendingTodos.append(todo);
  todoInput.val("").focus();
}

function init() {
  console.log('init');
  const btnSave = $('#btnSave');
  btnSave.click(saveTodo);
  const todoText = $('#todoText');
  todoText.keypress(function(e) {
    console.log(e);
  });

}

window.onload = init;