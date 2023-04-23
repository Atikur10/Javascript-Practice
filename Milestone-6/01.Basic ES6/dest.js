const person = {
    firstName: 'Badhon',
    lastName: 'Ahmed',
    age: 24,
    profession: 'Student',
    passion: 'Web Development',
}

/* const {firstName, lastName, age, profession, passion} = person;
console.log(firstName, age);
console.log(lastName, passion) */


const {firstName, lastName, age, profession, passion, city} = {firstName: 'Atikur', lastName: 'Rahman', age: 24, profession: 'Student', passion: 'Web Development', city: 'Dhaka'};
console.log(city)

// array

const name = ['shanto', 'badhon', 'atikur'];

const [fname, lname, thirdName] = name;
console.log(thirdName, fname)

function newName(){
    return ['a', 'b', 'c'];
}

const [first, second, third] = newName();
console.log(second)

let num = [2, 3, 5, 8, 9];

let numResult = Math.sqrt(...num);
let result = numResult / 5;
console.log(result)

// let practice = (num) => {
//     let avg = nm
// }