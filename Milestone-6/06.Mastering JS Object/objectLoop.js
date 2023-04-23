const student = {
    firstName: 'Badhon',
    lastName: 'Ahmed',
    age: 24,
    occupation: 'Student',
    aim: 'Web Developer',
    isMarried: true,
}

for(let value in student){
    console.log(`${value} ${student[value]}`)
}

// for (const [key, value] of Object.entries(student)) {
//     console.log(key, value)
// }





