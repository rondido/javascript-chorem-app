const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");



const hidden_classname = "hidden";

const usrname_KEy = "username";

function onLoginsubmit(event){
    event.preventDefault();
    loginForm.classList.add(hidden_classname); // 클래스를 필요에 따라 삽입한다.
    localStorage.setItem("usrname_KEy", loginInput.value);
   paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(hidden_classname);
}


const savedUsername = localStorage.getItem("usrname_KEy");

if(savedUsername === null){
    // form 보여주기
    loginForm.classList.remove(hidden_classname); // 클래스를 필요에 따라 제거한다.
    loginForm.addEventListener("submit", onLoginsubmit);
}else{
   paintGreetings(savedUsername);
}