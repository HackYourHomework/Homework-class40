'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(api) {
  const response = await fetch(api);
  if (response.ok) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
}

async function fetchAndPopulatePokemons(loadData) {
  const pokemonData = await fetchData(loadData);
  const addSelector = document.createElement('select');
  const addImage = document.createElement('div');
  const addButton = document.createElement('button');
  addButton.textContent = 'Get Pokemon';
  addButton.setAttribute('button', 'Hello');

  addButton.addEventListener('click', () => {
    pokemonData.results.forEach((result) => {
      const { name, url } = result;

      const option = document.createElement('option');
      option.text = name;
      option.value = url;
      addSelector.appendChild(option);
    });

    addSelector.addEventListener('change', (e) => {
      fetchImage(e.target.value, addImage);
    });
  });
  document.body.appendChild(addButton);
  document.body.appendChild(addSelector);
  document.body.appendChild(addImage);
}

async function fetchImage(api, imgContainer) {
  const imgSrc = await fetchData(api);
  const img = document.createElement('img');
  img.src = imgSrc.sprites.front_shiny;
  img.alt = imgSrc.name;
  imgContainer.textContent = ' ';
  imgContainer.appendChild(img);
}

async function main() {
  try {
    return await fetchAndPopulatePokemons(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener('load', main);
