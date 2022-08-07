let input1 = document.getElementById("input1");
let but1 = document.getElementById("but1");
let ull = document.querySelector('ul');
let but2 = document.getElementById("but2");
let input2 = document.getElementById("input2");

document.addEventListener('DOMContentLoaded', gettasks);

function gettasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task) {
        var newli = document.createElement('li');
        var newi = document.createElement('i');
        newli.innerText = task;
        ull.appendChild(newli);
        newli.appendChild(newi);
        newi.className = "fa fa-times";
        newi.style = "font-size:24px;color:red";
        newli.className = "lii";
    })
}

function zakhire() {

    var tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(input1.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


but1.addEventListener('click', ijad);

function ijad() {
    var newli = document.createElement('li');
    var newi = document.createElement('i');
    let dade = input1.value;
    newli.innerText = dade;
    ull.appendChild(newli);
    newli.appendChild(newi);
    newi.className = "fa fa-times";
    newi.style = "font-size:24px;color:red";
    newli.className = "lii";

    var tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(input1.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    input1.value = "";
}

ull.addEventListener('click', dell);

function dell(e) {
    if (e.target.classList.contains('fa')) {
        if (confirm('آیا مطمئن هستید؟')) {
            e.target.parentElement.remove();
            dellst(e.target.parentElement);
        }
    }
}

var liall = document.querySelectorAll('li');
but2.addEventListener('click', pak);

function pak() {
    if (confirm('آیا مطمئن هستید؟')) {
        ull.remove();
        localStorage.clear()
    }
}

function dellst(taskItem) {
    var tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}