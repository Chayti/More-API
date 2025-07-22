// const loadCountries = () => {
//     fetch(`https://restcountries.com/v3.1/all`)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }
// loadCountries();
// const displaycountries = conties => {
//     const container = document.getElementById('blog');
//     for (const country of conties) {
//         const div = document.createElement('div');
//         const h3 = document.createElement('h3');
//         div.classList.add('contain');
//         div.innerHTML = `<h3>${country.name}</h3><p>${country.capital}</p><button onclick="countryDetails('${country.name}')">details</button>`;
//         /* h3.innerText = country.name;
//         const p = document.createElement('p');
//         p.innerText = country.capital;
//         div.appendChild(h3);
//         div.appendChild(p); */
//         container.appendChild(div);
//     }
// }
// const countryDetails = (data) => {
//     const url = `https://restcountries.com/v3.1/name/${data}`;

//     fetch(url)
//         .then(res => res.json())
//         .then(data => showDetails(data[0]))
// }
// const showDetails = (data) => {
//     const div = document.createElement('div');
//     div.classList.add('contain');
//     div.innerHTML = `<p>population ${data.population}</p>
//     <img src="${data.flag}" width="200px">
//     `;
//     const container1 = document.getElementById('detail');

//     container1.appendChild(div);

// }
