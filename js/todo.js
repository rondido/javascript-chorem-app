const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo){
    const li = document.createElement("li"); //tag 생성
    const span = document.createElement("span");
    li.appendChild(span); //span을 li안에 넣겠다.
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);