// Tallest
function getTallest(number) {
    let largest = number[0];
    for(i = 0; i < number.length; i++){
        let index = i;
        let element = number[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

let height = [134, 145, 5, 167, 180, 198];
let getResult = getTallest(height);
console.log('Tallest person is: ' ,getResult);



// Shortest

function getSmall(number) {
        let largest = number[0]
    for(let i = 0; i < number.length; i++){
        let index = i;
        let element = number[index];
        if (element < largest) {
            largest = element
        }
    }
    return largest;
}

let heightCm = [134, 156, 122, 169, 189, 163, 111];
let getCount = getSmall(heightCm);
console.log('Smallest number is: ', getCount)









