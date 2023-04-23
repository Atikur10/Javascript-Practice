// Function default parameter 
let arrow = (first = 5, second = 10) => {
    return first + second;
}

const result = arrow();
console.log(result)

// Arrow function

let myFunction = (num1, num2, num3 = 5) => num1 * num2 + num3;

let total = myFunction(10, 10);
console.log(total)

let myName = (first = 'Badhon', last = 'Ahmed') => `my first name ${first} and last name ${last}`;
let getName = myName('Atikur', 'Rahman');
console.log(getName);





