function todoDisplayed() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => todoList(data))
}

function todoList(data) {
    const todoContainer = document.getElementById('todo-container');
    for (const user of data) {
        const div = document.createElement('div');
        div.classList.add('todo')
        div.innerHTML = `
            <h3>Id:${user.id}</h3>
            <h2>Title:${user.title}</h2>
            <p>${user.completed === true ? 'Completed' : 'not Completed'}
        `;
        todoContainer.appendChild(div)
    }
}

todoDisplayed()



