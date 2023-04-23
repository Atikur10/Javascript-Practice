const student = {
    id: 1,
    class: 'Seven',
    subject: 'Math'
}

const stringified = JSON.stringify(student);
const parse = JSON.parse(stringified);
console.log(stringified);
console.log(parse);

let members = ['badhon', 'shanto', 'shohana'];
console.log(members)
let str = JSON.stringify(members);
let obj = JSON.parse(str)
console.log(str)
console.log(obj)





