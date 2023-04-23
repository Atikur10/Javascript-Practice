// Slice 
let number = [23, 34, 74, 23, 98, 76, 65];
let cut = number.slice(1, 5);
console.log(cut)

// Splice 

let member = ['Alex', 'John', 'Doe', 'Adam', 'Saki'];
console.log(member.splice(0, 2, 'Badhon', 'Shanto', 'Atikur'));
console.log(member)





const arr = [1, 2, 3, 2, 1];
const unique = [...new Set(arr)];
console.log(unique)



