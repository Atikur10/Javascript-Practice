const products = [
    {name: 'Walton sd Mobile', price: 13000},
    {name: 'Symphony Mobile', price: 15000},
    {name: 'Nokia Sd Mobile', price: 23000},
    {name: 'Htc Mobile', price: 45000},
    {name: 'Motorola sd Mobile', price: 28000},
]

function matchedProducts(products, search){
    const match = [];
    for(const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            match.push(product)
        }
    }
    return match;
}

let result = matchedProducts(products, 'sd');
console.log(result);









