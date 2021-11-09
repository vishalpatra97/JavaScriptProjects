// all required elements
const inputBox = document.querySelector(".inputField input");
const btnEl = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const allClearBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
    let userData = inputBox.value; //getting user enabled value
    if (userData.trim() != 0) { //if user value aren't only spaces
        btnEl.classList.add("active"); //active the add button
    } else {
        btnEl.classList.remove("active");
    }
}
showTasks();

btnEl.onclick = () => {
    let userData = inputBox.value;
    let getlocalStorage = localStorage.getItem("New Todo"); //getting localStorage
    if (getlocalStorage == null) { // if local storage is null
        listArr = []; //creating blank array
    } else {
        listArr = JSON.parse(getlocalStorage); //transforming json string into a js object
    }
    listArr.push(userData); //pushing or addding user data 
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks(); // calling showtask function
}


// function to add task list inside ul
function showTasks() {
    let getlocalStorage = localStorage.getItem("New Todo");
    if (getlocalStorage == null) { // if local storage is null
        listArr = []; //creating blank array
    } else {
        listArr = JSON.parse(getlocalStorage); //transforming json string into a js object
    }

    const pendingNumber = document.querySelector(".pendingNumber");
    pendingNumber.textContent = listArr.length; //passing the length value in pending numnber

    if(listArr.length > 0){    //clear button is active when there is a task list in ul
        allClearBtn.classList.add("active");
    }else{
        allClearBtn.classList.remove("active");
    }

    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onClick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li  tag ibnside ul tag
    inputBox.value = ``; // once task added leave the input field blank
}


//delete Task function
function deleteTask(index) {
    let getlocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getlocalStorage);
    listArr.splice(index, 1); //delete or remove the particular indexed li
    //after remove the li again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks(); // calling showtask function
}

//delete all task

allClearBtn.onclick = () => {
    listArr = []; //empty an array
    //after delete all task again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks(); // calling showtask function
}