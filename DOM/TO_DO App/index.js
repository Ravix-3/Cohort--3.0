let todoindex = 1;
function addTodo()
{
   const element = document.getElementById("todoInput");
  const todo = element.value;
  if(todo === "")
  {
    alert("Please enter a todo item");
    return;
  }
  element.value = "";
  const parentElement = document.getElementById("todos");

  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("id", "todo-"+ todoindex);
  const todoTask = document.createElement("span");
  todoTask.innerHTML = todo;
  todoDiv.appendChild(todoTask);

 const deleteButton = document.createElement("button");
 deleteButton.innerHTML = "Delete Todo";
 deleteButton.setAttribute("onclick","deleteTodo("+ todoindex +")");
 todoDiv.appendChild(deleteButton);

parentElement.appendChild(todoDiv);
 todoindex = todoindex + 1;
}
function deleteTodo(index){
  const div_element  = document.getElementById("todo-" + index);
  div_element.parentElement.removeChild(div_element);
  // div_element.remove();
}