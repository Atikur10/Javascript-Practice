const member = {
    firstName: 'Badhon',
    lastName: 'Ahmed',
    salary: 6000,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    phonePrice: function(amount, tips){
        return this.salary = this.salary - amount - tips;
    },
    treat: function(amount, tips){
        return this.salary = this.salary - amount - tips;
    }
}

console.log(member.fullName())

const newMember = {
    firstName: 'Shanto',
    lastName: 'Mohammed',
}

const newMem = member.fullName.call(newMember);
console.log(newMem)

const student = {
    firstName: 'Tahsan',
    lastName: 'Rahman',
    salary: 3000,
}

const result = member.fullName.call(student);
console.log(result)

const money = member.treat.call(student, 500, 100);
console.log(money)
const money1 = member.treat.apply(student, [500, 100]);
console.log(money1)
const money2 = member.treat.bind(student);
const remain = money2(700, 100);
console.log(remain)




