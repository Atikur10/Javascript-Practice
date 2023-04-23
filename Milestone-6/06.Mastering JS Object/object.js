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
let fullName = member.fullName();
console.log(fullName)
let remain = member.phonePrice(2000, 50);
console.log(remain)
let treat = member.phonePrice(500, 20);
console.log(treat);