// How to reverse String
function reverseStr(str){
    for(let i = str.length-1; i >= 0; i--){
        let element = str[i]
        console.log(element)
    }
}

let text = 'Hello World!';
let textReverse = reverseStr(text);

function reverseString(text) {
    let reverse = '';
    for(let i = text.length-1; i >= 0; i--){
        let element = text[i];
        reverse = reverse + element;
        console.log(element, reverse)
    }
    return reverse;
}

let string = 'I love my country';
let stringReverse = reverseString(string);
console.log(stringReverse);









