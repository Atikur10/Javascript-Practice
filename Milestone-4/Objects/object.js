const student = {
    firstName: 'Badhon',
    lastName: 'Ahmed',
    age: 24,
    profession: 'Web Developer',
    home: 'Munshigonj',

    fullName: function(){
        return this.firstName + this.lastName;
    }
};
student.hobby = 'Gardening';
student.vision = 'Programmer';
console.log(student)
console.log(student.fullName());
console.log(student['age'])
let objectProperty = Object.keys(student);
let objectProperty1 = Object.values(student);
console.log(objectProperty)
console.log(objectProperty1);

let propertyName = 'profession';
let propertyValue = student[propertyName];
console.log(propertyValue);







