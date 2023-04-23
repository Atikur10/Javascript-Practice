let sum = 0;
for(let i = 0; i <= 5; i++){
    sum = sum + i;
    console.log(i, sum)
}
console.log(sum)

let sum1 = 0;
for(let i = 5; i >= 1; i--){
    sum1 = sum1 + i
    console.log(i, sum1)
}
console.log(sum1)



function matchedProducts(products, search) {
    const matched = [];
    for(const product of products){
       if (product.name.includes(search)) {
        matched.push(product)
       }
    }
    return matched;
}

let result = matchedProducts(products, 'sd');
console.log(result)







