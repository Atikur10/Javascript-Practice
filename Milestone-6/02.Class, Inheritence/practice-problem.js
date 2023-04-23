let numbers1 = [1, 3, 5, 7, 9];
let even = numbers1.map(add => add + 1);
console.log(even)

let numbers2 = [33, 50, 79, 78, 90, 101, 30];
let getResult = numbers2.filter(num => num % 10 === 0);
console.log(getResult)

const compare = numbers2.find(num => num > 78);
console.log(compare)

const numbers3 = [1, 9, 17, 22];

const getResult1 = numbers3.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current;
})
console.log(getResult1)

const people = [
    {name: 'badhon', age: 20},
    {name: 'Shanto', age: 15},
    {name: 'Atikur', age: 22}
]

let getAge1 = people[0].age;
let getAge2 = people[1].age;
let getAge3 = people[2].age;
const getResult2 = people.reduce((age) => {
    console.log(age)
    return getAge1 + getAge2 + getAge3;
})

console.log(people[0].name)


