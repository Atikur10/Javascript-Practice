function calculateWood(chairQuantity, tableQuantity, bedQuantity) {
    const chair = 3;
    const table = 10;
    const bed = 50;

    const chairWood = chairQuantity * chair;
    const tableWood = tableQuantity * table;
    const bedWood = bedQuantity * bed;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = calculateWood(12, 2, 3);
console.log('Total Wood Required ', totalWood, 'Kb')