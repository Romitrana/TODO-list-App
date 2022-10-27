const push_todo = document.querySelector(".search-btn");
const todos = document.querySelector(".todo-wrapper");
const inputE1 = document.querySelector(".input_todo");
const todo_barE1 = document.querySelector(".todo_bar");

//main program***************************

showtask();

push_todo.addEventListener("click", function () {
  let todo_inp = inputE1.value; //input here
  if (todo_inp.length == 0 && todo_inp == "") {
    alert("Please Enter some todos...!");
  } else {
    let intance = `<div class="todo_bar">
        <h2>${todo_inp}</h2> <span class="delete" onclick = "deletetask()"><i class="fa-solid fa-trash"></i></span>
        </div>`;

    todos.innerHTML += intance; //adding task

    //local strorage functionality
    let getLocalstorage = localStorage.getItem("new todo");
    if (getLocalstorage == null) {
      listArr = [];
    } else {
      listArr = JSON.parse(getLocalstorage); //transforming json string to json object.
    }
    listArr.push(todo_inp); // pushing user data.
    localStorage.setItem("new todo", JSON.stringify(listArr)); // json obeject to string.
    showtask(); // calling showtask function.
    // reassigning values
    inputE1.value = "";
    todo_inp = inputE1.value;

    // reassigning values
    inputE1.value = "";
    todo_inp = inputE1.value;
  }
});

//---------------Action pressing Enter key----------------
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let todo_inp = inputE1.value;
    if (todo_inp.length == 0 && todo_inp == "") {
      console.log("please write something");
    } else {
      let intance = `<div class="todo_bar">
          <h2>${todo_inp}</h2> <span class="delete"><i class="fa-solid fa-trash"></i></span>
          </div>`;
      todos.innerHTML += intance;

      //local strorage functionality
      let getLocalstorage = localStorage.getItem("new todo");
      if (getLocalstorage == null) {
        listArr = [];
      } else {
        listArr = JSON.parse(getLocalstorage); //transforming json string to json object.
      }
      listArr.push(todo_inp); // pushing user data.
      localStorage.setItem("new todo", JSON.stringify(listArr)); // json obeject to string.
      showtask(); // calling showtask function.
      // reassigning values
      inputE1.value = "";
      todo_inp = inputE1.value;
    }
  }
});

function showtask() {
  let getLocalstorage = localStorage.getItem("new todo");
  if (getLocalstorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalstorage); //transforming json string to json object.
  }
  let newlitag = "";
  listArr.forEach((element, index) => {
    newlitag += `<div class="todo_bar">
    <h2>${element}</h2> <span class="delete" onclick = "deletetask(${index})"><i class="fa-solid fa-trash"></i></span>
    </div>`;
  });
  todos.innerHTML = newlitag;
  inputE1.value = "";
}

function deletetask(index) {
  let getLocalstorage = localStorage.getItem("new todo");
  listArr = JSON.parse(getLocalstorage);
  listArr.splice(index, 1); // remove particular task index.
  //after delete again update the local storage.
  localStorage.setItem("new todo", JSON.stringify(listArr)); // json obeject to string.
  showtask();
}
