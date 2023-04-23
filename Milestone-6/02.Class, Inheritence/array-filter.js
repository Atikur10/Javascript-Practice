const numbers = [34, 45, 56, 85, 68, 86, 67, 98];

// const getBigNumbers = numbers.filter(num => num > 70);
const getBigNumbers = numbers.filter(num => num < 70);
// console.log(getBigNumbers);
const even = numbers.filter(number => number % 2 == 0);
console.log(even)
const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'PC', price: 55000},
    {id: 3, name: 'Mobile', price: 25000},
    {id: 4, name: 'Watch', price: 20000},
]

const expensive = products.filter(product => product.price > 25000);
// console.log(expensive)

let person = ['badhon', 'shanto', 'shohana', 'afroz', 'rahman'];

let bigName = person.filter(name => name.length > 5);
console.log(bigName);





