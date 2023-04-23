let computer = {
    name: 'Windows 10 pro',
    processor: 'Core i3',
    motherboard: 'Gigabyte',
    ram: '4gb',
    hardDrive: '1tb',
    monitor: 'Samsung',
}

console.log(computer);
console.log(computer.motherboard);
console.log(computer['monitor']);

let name = ['a', 'b', 'c', 'd', 'e', 'e'];
for(i = 0; i < name.length; i++){
    console.log(i)
    console.log(name[i]);
};
