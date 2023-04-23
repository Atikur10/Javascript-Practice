let computer = {
    name: 'Windows 10 pro',
    processor: 'Core i3',
    motherboard: 'Gigabyte',
    ram: '4gb',
    hardDrive: '1tb',
    monitor: 'Samsung',
}

let keys = Object.keys(computer);
console.log(keys)
let value = Object.values(computer)
for( i = 0; i < keys.length; i++){
    console.log(i)
    console.log(keys[i])
}

for(let keys in computer){
    console.log(keys);
}







