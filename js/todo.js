const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deletebutton(event){
    const li = event.target.parentElement;
    li.remove();

}

function paintTodo(newTodo){
    const li = document.createElement("li"); //tag 생성
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deletebutton);
    li.appendChild(span); //span을 li안에 넣겠다.
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);