const numbers = [34, 45, 56, 86, 68, 86];
const half = numbers.map(num => num/2); 
// console.log(half);
const third = numbers.map(x => x/3);
// console.log(third)

let person = ['badhon', 'shanto', 'shohana', 'afroz', 'rahman'];
let firstLetter = person.map(letter => letter[0]);
let personLength = person.map(text => text.length);
// console.log(firstLetter, personLength)

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'PC', price: 55000},
    {id: 3, name: 'Mobile', price: 25000},
    {id: 4, name: 'Watch', price: 20000},
]

const item = products.map(value => value.name);
console.log(item)
let getPerson = person.map(p => p);
console.log(person)












