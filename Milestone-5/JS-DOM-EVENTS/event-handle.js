function changeText(){
    const changeText = document.getElementById('change-text');
    changeText.innerText = 'Bangladesh also a beautiful country';
    changeText.style.color = 'tomato';
}

let changeDomEvent = document.getElementById('know-more').addEventListener('click', function(){
    const textChange = document.getElementById('new-text');
    textChange.innerText = 'New zealand is one of the most beautiful country in the world';
    textChange.style.fontSize = '2rem'
})

// How to change Element
/* document.getElementById('button').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text');
    p.innerText = inputText;
    inputField.value = '' 
})
 */


document.getElementById('button').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const text = document.getElementById('input-text');
    text.innerText = inputText;
    inputField.value = '';
})
