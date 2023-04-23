const numbers = [34, 45, 56, 85, 68, 86, 67, 98];

const under50 = numbers.find(num => num > 50);
const up50 = numbers.find(num => num % 5 === 0);
console.log(under50)
console.log(up50)


const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'PC', price: 55000},
    {id: 3, name: 'Mobile', price: 25000},
    {id: 4, name: 'Watch', price: 20000},
]

const cheap = products.find(product => product.price > 25000);
console.log(cheap)

let person = ['badhon', 'shanto', 'shohana', 'afroz', 'rahman'];

let bigName = person.filter(name => name.length > 6);
console.log(bigName);
