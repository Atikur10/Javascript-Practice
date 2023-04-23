const loadPhone = async(searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();
    displayPhone(data.data, dataLimit)
}

const displayPhone = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';
    // Display 10 phones
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
      phones = phones.slice(0, 10)
      showAll.classList.remove('d-none')
    } else {
      showAll.classList.add('d-none')
    }
    
    // Display no phone found
    const noPhoneFound = document.getElementById('no-phone-found');
    if (phones.length === 0) {
      noPhoneFound.classList.remove('d-none')
    }else{
      noPhoneFound.classList.add('d-none')
    }
    // Display all phone
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="col m-auto p-2">
        <div class="card p-3">
          <img class="img-fluid" src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button onclick="lodePhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetails">see more</button>
          </div>
        </div>
      </div> 
        `;
        phoneContainer.appendChild(phoneDiv)
    })
    toggleSpinner(false)
}

const ShowData = (dataLimit) => {
  toggleSpinner(true)
  const searchInput = document.getElementById('search-field').value;
  loadPhone(searchInput, dataLimit)
}

document.getElementById('search-button').addEventListener('click', function() {
  ShowData(10)
})

document.getElementById('search-field').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    ShowData(10)
  }
});

document.getElementById('show-all-button').addEventListener('click', function() {
  ShowData()
})

const toggleSpinner = isLoading => {
  const spinnerLoader = document.getElementById('loader');
  if (isLoading) {
    spinnerLoader.classList.remove('d-none')
  } else {
    spinnerLoader.classList.add('d-none')
  }
}

const lodePhoneDetails = async(id )=>{
  const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  phoneInformation(data.data)
}

const phoneInformation = phone => {
  console.log(phone)
  const phoneTitle = document.getElementById('phoneDetailsLabel');
  phoneTitle.innerText = phone.name;
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No ReleaseDate Found'}</p>
    <p>Main Features: ${phone.mainFeatures.chipSet}</p>
  `
}

loadPhone('samsung')