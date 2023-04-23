// function calculateSum(array) {
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         let x = i;
//         let y = array[x]
//         sum += y;
//         console.log(x, y, sum);
//     }
// }


// const myNumbers = [23, 34, 2, 9, 34, 45, 56, 76];
// calculateSum(myNumbers);






// function getSumNumber(array) {
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         const index = i
//         const element = array[i];
//         sum += element;
//         console.log(index, element, sum)     
//     }
//     return sum;
// }



// const myNumbers = [13, 34, 32, 43, 45, 6, 86, 31];
// getSumNumber(myNumbers)





function calculateSum(array) {
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        const index = i;
        const element = array[i]
        sum += element;
        console.log(index, element, sum);
    }
    return sum;
}
let myNumbers = [1, 3, 3, 4, 5, 9, 4, 7];
calculateSum(myNumbers);
















