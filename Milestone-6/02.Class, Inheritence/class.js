class Person{
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    greetings(){
        return `Hello I am ${this.firstName} ${this.lastName}`
    }
    supportSession(){
        return `Hello ${this.firstName} ${this.lastName} Start the support Session`
    }
}

class Student extends Person{
    constructor(fname, lname, roll, subject, id) {
        super(fname, lname);
        this.rollNo = roll;
        this.subjectName = subject;
        this.idNo = id;
    }
}

class Cricketer extends Person{
    constructor(fname, lname, role, bat, bowl) {
        super(fname, lname);
        this.role = role;
        this.battingAverage = bat;
        this.bowling = bowl;
    }

    promise(){
        return `I will plays ${this.role} role for my country`
    }
}

let person1 = new Person('badhon', 'ahmed');
console.log(person1.greetings('Mohammad', 'Shanto'));

let student1 = new Student('Atikur', 'Rahman', '20', 'Politics', 8540);
console.log(student1.supportSession());

const badhon = new Cricketer('Badhon', 'Ahmed', 'All rounder', 'Hard heater', 'Dangerous')
console.log(badhon.promise())
