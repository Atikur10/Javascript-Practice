// Find the cheapest Phone 
const phones = [
    {name: 'Samsung', Model: 'Note11', Price: 23000, release: 2022},
    {name: 'Realme', Model: 'Note11pro', Price: 18000, release: 2022},
    {name: 'Redmi', Model: 'Note12', Price: 33000, release: 2022},
    {name: 'Nokia', Model: 'Note10', Price: 25000, release: 2022},
    {name: 'Poco', Model: 'Note13', Price: 35000, release: 2023},
    {name: 'Infinix', Model: 'Note12g96', Price: 43000, release: 2022},
]

function cheapestPhone(phones) {
    let cheapest = phones[0]
    for(let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if (phone.Price < cheapest.Price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

let mySelection = cheapestPhone(phones)
console.log(mySelection);


// Find the height shutter

const bestCamera = [
    {name: 'Samsung', Model: 'Note11', shutter: 60, Price: 23000, release: 2022},
    {name: 'Realme', Model: 'Note11pro', shutter: 50, Price: 18000, release: 2022},
    {name: 'Redmi', Model: 'Note12', shutter: 100, Price: 33000, release: 2022},
    {name: 'Nokia', Model: 'Note10', shutter: 80, Price: 25000, release: 2022},
    {name: 'Poco', Model: 'Note13', shutter: 50, Price: 35000, release: 2023},
    {name: 'Infinix', Model: 'Note12g96', shutter: 150, Price: 43000, release: 2022},
]

function bestShutter(pixel) {
    let highest = pixel[0];
    for(let i = 0; i < pixel.length; i++){
        let camera = pixel[i];
        if (camera.shutter > highest.shutter ) {
            highest = camera;
        }
    }
    return highest;
}

let myFavorite = bestShutter(bestCamera)
console.log(myFavorite)












