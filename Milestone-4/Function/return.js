function myFunction(number1, number2){
    let sum = number1 + number2;
    return sum;
}

let total = myFunction(20, 20);
console.log(total);

console.log('Hello World');
console.log('Hey I am a web developer!');
console.log(myFunction(20, 10))


function add(money){
    let price = 10;
    let quantity = money / price;
    return quantity;
}

let iGet = add(500);
console.log(iGet);


function food(money){
    let foodPrice = 10;
    let quantity = money / foodPrice;
    return quantity;
}
let giveMoney = 250
let totalMoney = food(giveMoney);
console.log(totalMoney)