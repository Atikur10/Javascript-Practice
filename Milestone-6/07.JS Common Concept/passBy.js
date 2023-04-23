
let couple1 = {name: 'Ananta', partner: 'Barsha'};
let couple2 = {name: 'Shakib', partner: 'Bubli'};

function makeMovie(hero1, hero2){
    hero1.name = 'Jalil';
    hero2.partner = 'Apu';
}

console.log(couple1)
makeMovie(couple1, couple2);
console.log(couple1, couple2)

