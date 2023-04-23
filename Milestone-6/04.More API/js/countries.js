function countriesInfo(){
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country.cca2)
        const countriesDiv = document.createElement('div');
        countriesDiv.classList.add('country');
        countriesDiv.innerHTML = `
            <img src="${country.flags.png}">
            <h3>Name:${country.name.common}</h3>
            <p>Capital:${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick="displayCountriesCode('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countriesDiv)
    })
    
}

const displayCountriesCode = (code) => {
    const url = `https://restcountries.com/v2/alpha/${code}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayCountriesDetails(data))
}

const displayCountriesDetails = (detail) => {
    const countriesDetails = document.getElementById('countries-details');
    console.log(detail)
    countriesDetails.innerHTML = `
        <h2>Name:${detail.name} </h2>
        
    `
}



countriesInfo()