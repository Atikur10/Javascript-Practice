/* function removeDuplicateName(names) {
    let unique = [];
    for(let i = 0; i < names.length; i++){
        let name = names[i]
        if (unique.includes(name) === false) {
            unique.push(name)
        }
    }
    return unique;
}


let uniqueName = ['Badhon', 'Shanto', 'Atikur', 'Mohammed', 'Rahman', 'Sunny', 'Siam', 'Shohana', 'Afroz', 'Badhon', 'Atikur', 'Siam', 'Afroz', 'Shanto'];
let remove = removeDuplicateName(uniqueName);
console.log(remove)
 */

let elementName = ['Badhon', 'Shanto', 'Atikur', 'Mohammed', 'Rahman', 'Sunny', 'Siam', 'Shohana', 'Afroz', 'Badhon', 'Atikur', 'Siam', 'Afroz', 'Shanto', 'Laden'];
let removeElement = removeDuplicateElement(elementName);
console.log(removeElement);

function removeDuplicateElement(names){
    let unique = [];
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name)
        }
    }
    return unique;
}




















