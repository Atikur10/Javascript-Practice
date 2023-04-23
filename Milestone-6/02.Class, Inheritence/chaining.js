const user = {
    id: 342,
    name: 'Thomas Alva Edison',
    address: {
        street: {
            first: 'Bangladesh',
            second: 'USA',
            third: 'Canada'
        },
        city: 'Dhaka',
        Nationality: 'Bangladeshi'    
    }
}

let userData = user.address?.street?.third;
console.log(userData)






