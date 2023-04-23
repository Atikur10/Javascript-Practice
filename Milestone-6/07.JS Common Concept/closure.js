function kitchen() {
    let counter = 0;
    return function(){
        counter++
        return counter;
    }
}

let result = kitchen();
console.log(result())
console.log(result())
console.log(result())
console.log(result())
console.log(result())