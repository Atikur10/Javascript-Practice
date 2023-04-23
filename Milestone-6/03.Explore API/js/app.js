/* function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function userData(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => displayData(data))
}

function displayData(data){
    const ul = document.getElementById('user-container');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li)
        // console.log(user.email)
    }
    
}

 */




function apiData(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => userData(data))
}


function userData(data){
    const ul = document.getElementById('user-container');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerHTML = user.name;
        ul.appendChild(li)
    }
}














