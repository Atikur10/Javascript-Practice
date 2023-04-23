// Get Odd Numbers
function getOddNumbersOfAnArray(numbers){
    for(i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
        }
    }
}

/* let myNumbers1 = [3, 43, 34, 32, 45, 76, 33, 99];
getOddNumbersOfAnArray(myNumbers1)
 */
function getOddNumbersOfAnArray1(numbers){
    const oddNumbers = [];
    for(i = 0; i< numbers.length; i++){
        const index = i;
        const element = numbers[i];
        if (element % 2 !== 0) {
           console.log(index, element)
           oddNumbers.push(element)                      
        }
    }
    return oddNumbers;
}

const myNumbers2 = [3, 34, 33, 38, 41, 45, 48, 59];
const oddNumbers = getOddNumbersOfAnArray1(myNumbers2);
console.log(oddNumbers);
getOddNumbersOfAnArray1(myNumbers2);

//factorial
function factorial(number) {
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

let getNumber = factorial(9);
console.log(getNumber);


