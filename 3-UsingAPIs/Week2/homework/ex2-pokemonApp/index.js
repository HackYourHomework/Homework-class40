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
async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
}

async function fetchAndPopulatePokemons() {
  const selectedElement = document.querySelector('.selected-pokemons');
  if (selectedElement !== null) {
    return;
  }
  try {
    const pokemonData = await fetchData(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    const jsonData = await pokemonData.json();

    const selectElement = document.createElement('select');
    selectElement.classList.add('selected-pokemons');
    document.body.appendChild(selectElement);
    selectElement.addEventListener('change', fetchImage);
    jsonData.results.forEach((pokemonObj) => {
      const option = document.createElement('option');
      option.textContent = pokemonObj.name;
      option.value = pokemonObj.url;

      selectElement.appendChild(option);
    });
  } catch (error) {
    console.log('Pokemon error', error.message);
  }
}

async function fetchImage(event) {
  try {
    const pokemonUrl = event.target.value;

    const pokemonData = await fetchData(pokemonUrl);

    const pokemonImage = await pokemonData.json();

    let imageElement = document.querySelector('.pokemon');
    if (imageElement === null) {
      imageElement = document.createElement('img');
      imageElement.classList.add('pokemon');
      document.body.appendChild(imageElement);
    }

    imageElement.src = pokemonImage.sprites['back_default'];
  } catch (error) {
    console.log('Pokemon error', error.message);
  }
}

function main() {
  try {
    const button = document.createElement('button');
    button.textContent = `Get Pokemon!`;
    button.type = 'button';
    document.body.appendChild(button);
    button.addEventListener('click', fetchAndPopulatePokemons);
  } catch (error) {
    console.log('Pokemon error', error.message);
  }
}

window.addEventListener('load', main);
