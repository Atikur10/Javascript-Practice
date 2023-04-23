const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
        .catch(err => console.log(err))

}

const displayMeals = meals => {
   const foodContainer = document.getElementById('food-container');
   foodContainer.innerHTML = '';
   meals.forEach(meal => {
    // console.log(meal.idMeal)
    const foodDiv = document.createElement('div');
    foodDiv.classList.add('col');
    foodDiv.innerHTML = `
    <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
      </button>
    </div>
    </div>

    `;
    foodContainer.appendChild(foodDiv)
   })
}

const searchButton = () => {
    const searchField = document.getElementById('search-field').value;
    console.log(searchField)
    loadMeals(searchField)
}


const loadMealDetail = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
  .then(response => response.json())
  .then(data => displayMealDetails(data.meals[0]))
  .catch(err => console.log(err))
}

/* const loadMealDetail2 = async(idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const response = await fetch(url);
  const data = await response.json();
  displayMealDetails(data.meals[0])
}
 */

const loadMealDetail2 = async(idMeal) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const response = await fetch(url);
    const data = await response.json();
    displayMealDetails(data.meals[0])
  } catch (error) {
    console.log(error)
  }
}


const displayMealDetails = (meal) => {
  console.log(meal)
  document.getElementById('exampleModalLabel').innerText = meal.strMeal;
  const mealsDetails = document.getElementById('meals-details-body');
  mealsDetails.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    <h2>${meal.strIngredient1}</h2>
  `
}




loadMeals('rice')