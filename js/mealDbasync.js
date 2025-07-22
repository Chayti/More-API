const searchFood = () => {
    const searchInput = document.getElementById('search-field');
    const searchValue = searchInput.value;
    const searchResult = document.getElementById('result');
    searchInput.value = '';
    if (searchValue == '') {
        const p = document.createElement('p');
        p.innerHTML = `<p>please enter something</p>`;
        searchResult.appendChild(p);
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayFood(data.meals))
    }

}
const displayFood = (meals) => {
    const searchResult = document.getElementById('result');
    // searchResult.textContent = '';
    searchResult.innerHTML = '';
    // error handling
    if (meals == null) {
        const p = document.createElement('p');
        p.innerHTML = `<p>no result found</p>`;
        searchResult.appendChild(p);
    }
    else {
        meals.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = ` <div onclick="displayDetails('${meal.idMeal}')" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>`;
            searchResult.appendChild(div);

        });
    }

}
const displayDetails = (mealId) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoodDetails(data.meals[0]))


}
const displayFoodDetails = (meals) => {
    const container = document.getElementById('details1');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = ` <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body"><h5 class="card-title">${meals.strMeal}</h5>
    <p class="card-text">${meals.strInstructions.slice(0, 200)}</p>
        
        <a href="${meals.strYoutube}" class="btn btn-primary">Go youtube</a>
    </div>`;
    container.appendChild(div);
    console.log(meals);
}