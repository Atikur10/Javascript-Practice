/* let contact = document.getElementById('contact');
contact.className = 'random-class'
let li = document.createElement('li');
let li2 = document.createElement('li');
li2.className = 'office-class'
li.innerText = 'Phone';
li2.innerText = 'Office';
contact.appendChild(li2)
contact.appendChild(li);
console.log(contact, li) */

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const heading = document.createElement('h1');
heading.innerText = 'My food list'
section.appendChild(heading)

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Chicken';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Mutton';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Beef';
ul.appendChild(li3);

section.appendChild(ul)
mainContainer.appendChild(section)


const newSection = document.createElement('section');
newSection.innerHTML = `
    <h1>My Dresses</h1>
    <ul>
        <li>Shirt</li>
        <li>Pant</li>
        <li>t-Shirt</li>
    </ul>
`

mainContainer.appendChild(newSection)



