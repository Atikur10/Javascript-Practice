let user = ['badhon', 'shanto', 'rahman', 'atikur', 'mohammad', 'shohana'];
let numbers = [2, 3, 9, 4, 6, 8, 7];

// let getDouble = numbers.map(function(number){
//     return number * 2;
// })
let getDouble = numbers.map(makeDouble2)
// console.log(getDouble)

function makeDouble(number){
    return number * 2;
}

let makeDouble1 = numbers.map(num => num * 2);
// console.log(makeDouble1)

function makeDouble2(value, index, array){
    // console.log(index, value)
}

const stringTrigger = user.map(stringTraverse);

function stringTraverse(value, index, array){
    console.log(index, value)
}

