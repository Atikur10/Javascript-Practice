// Check Even and Odd number

function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        console.log('Number is Even')
    } else {
        console.log('Number is Odd')
    }
}

isEven(349);
isEven(442);

// Return
function isOdd(number) {
    const remainder = number % 2;
    if (remainder === 1) {
        return true;
    } else {
        return false;
    }
}

const myNumberIsOdd = isOdd(335);
console.log(myNumberIsOdd);



function isLeapYear(year) {
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        return true;
    } else {
        return false;
    }
}


let leap = isLeapYear(2001);
console.log(leap);





