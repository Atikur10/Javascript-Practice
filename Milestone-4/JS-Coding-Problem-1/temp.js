let number1 = 5;
let number2 = 7;
console.log(number1, number2);

// number1 = number2;
// number2 = number1;
// approach -1

// const temp = number1;
// number1 = number2;
// number2 = temp;
// console.log(number1, number2)

// Approach -2

[number1, number2] = [number2, number1];
console.log(number1, number2)


