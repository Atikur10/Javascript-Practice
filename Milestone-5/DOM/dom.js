
const liCollection = document.getElementsByTagName('li');
const allHeading = document.getElementsByTagName('h1');
console.log(liCollection);
for (const li of liCollection) {
    console.log(li.firstChild.nodeType)
}
for (const heading of allHeading) {
    console.log(heading.innerText)
}

let title = document.getElementById('visit-title');
title.innerHTML = 'Which Place I like to visit';
title.style.fontSize = '50px'
console.log(title)
let language = document.querySelector('h1.language');
language.style.color = 'black';
language.style.fontSize = '2rem';
language.style.textAlign = 'center'
console.log(language)
let favPlace = document.getElementsByClassName('fav-place');
for (const x of favPlace) {
    console.log(x)
}
console.log(favPlace)

const headerTitle = document.querySelector('.header-title');
headerTitle.setAttribute('title','World Health Organizations')
headerTitle.style.borderBottom = '1px solid red';
headerTitle.style.textAlign = 'center';
headerTitle.style.marginBottom = '10px'
console.log(headerTitle)


let getElement = document.querySelectorAll('.get-element li');
for (const li of getElement) {
    console.log(li)
}
console.log(getElement);


getElement.forEach(function(num){
    console.log(num)
})

let getElement1 = document.getElementById('get-element');
getElement1.classList;
getElement1.classList.remove('abc');
getElement1.classList.add('title-bg');
console.log(getElement1)


let visitTitle = document.getElementById('visit-title');
visitTitle.style.textAlign = 'center'
visitTitle.style.margin = '0 auto'
visitTitle.style.textShadow = '2px 2px 2px';

visitTitle.setAttribute('title', 'Which place i Want to visit');
visitTitle.getAttribute('title')

console.log(visitTitle)

const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '1px solid black'
    section.style.marginBottom = '5px'
}
console.log(sections)
