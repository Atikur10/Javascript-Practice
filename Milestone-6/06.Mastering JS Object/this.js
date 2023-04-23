const student = {
    firstName: 'Badhon',
    lastName: 'Ahmed',
    salary: 6000,
    subject: ['English', 'Chemistry', 'physics', 'biology'],
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    exam: function(){
        console.log(this)
        return `${this.firstName} ${this.lastName} first exam ${student.subject[0]} will start tomorrow`;
    },
    examArrow: () => {
        console.log(this)
    },
    examArrowNested: () => {
        const arrow = () => {
            console.log(this)
        }
        arrow()
    },
    phonePrice: function(amount, tips){
        return this.salary = this.salary - amount - tips;
    },
    treat: function(amount, tips){
        return this.salary = this.salary - amount - tips;
    }
}
student.exam()

const student1 = {
    firstName: 'Atikur',
    lastName: 'Rahman',
    dob: 1999,
    salary: 6000,
    age: function(){
        return 2023 - this.dob;
    }
}
console.log(student1.age())

student1.exam = student.exam;
student1.exam()

// console.log(student);

function myFunction(){
    console.log(this)
}

document.getElementById('button-clicked').addEventListener('click', function() {
   console.log(this)
})

