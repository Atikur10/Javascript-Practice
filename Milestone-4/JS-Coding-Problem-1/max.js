let jim = 84;
let dela = 95;
if (jim > dela) {
    console.log('Jim Will get the cake');
} else {
    console.log('Dela will get the cake')
}

// Who will win the cake

const alex = 35;
const del = 44;
const sunny = 54;

if (alex > del && alex > sunny) {
    console.log('Alex will get the cake!')
}else if(del > alex && del > sunny){
    console.log('Del will get the cake!');
}else{
    console.log('Sunny will get the cake!')
}

let getResult = Math.max(alex, del, sunny);
console.log(getResult);

// Home Work
// 01.

let num1= 90;
let num2 = 95;
let num3 = 87;

if (num1 > num2 && num1 > num3) {
    console.log('Num1 is the biggest')
}else if(num2 > num1 && num2 > num3){
    console.log('Num2 is the biggest')
}else{
    console.log('Num3 is the biggest')
}


// 02.
function getMaxNumber(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

let getResult1 = getMaxNumber(95, 99, 97);
console.log(getResult1)

function getHeight(array) {
    return Math.max(array)
}

let height = getHeight[134, 145, 156, 179];
console.log(height)






