const randomImage = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(response => response.json())
        .then(data => displayImage(data))
}

const displayImage = (data) => {
    const div = document.getElementById('random-image');
    const gender = document.getElementById('gender');
    gender.innerHTML = data.results[0].gender
    const name = document.getElementById('name');
    name.innerHTML =`${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
    const image = document.getElementById('image');
    image.innerHTML = `<img src = "${data.results[0].picture.large}">`
    console.log(data.results[0].picture)
    
}







randomImage()