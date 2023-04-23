function displayPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => readPost(data))
}

function readPost(data){
    const postContainer = document.getElementById('post-container');
    for (const user of data) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h3>Id:${user.id}</h3>
            <h4>Title:${user.title}</h4>
            <h6>Body:${user.body}</h6>
        `;
        postContainer.appendChild(div)
    }   
}










