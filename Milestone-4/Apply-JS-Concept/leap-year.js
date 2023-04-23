// Leap Year
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        // console.log('Leap Year')
        return true;
    } else {
        // console.log('Is Not Leap Year')
        return false;
    }
}
const checkLeapYear = isLeapYear(2025);
console.log(checkLeapYear);