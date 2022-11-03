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
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP error, status= ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

function listPokemonsNames(pokemonData) {
  const select = document.getElementById('selectId');
  for (const element of pokemonData.results) {
    const option = document.createElement('option');
    option.value = element.url;
    option.text = element.name;
    select.appendChild(option);
  }
  select.addEventListener('change', () => {
    fetchImage(select.value);
  });
}

async function fetchAndPopulatePokemons(url) {
  try {
    const pokemonData = await fetchData(url);
    const btn = document.createElement('button');
    btn.classList.add('btnStyling');
    btn.textContent = 'Get Pokemon';

    const creatingSelect = document.createElement('select');
    creatingSelect.classList.add('selectStyling');
    creatingSelect.id = 'selectId';
    document.body.appendChild(creatingSelect);

    btn.addEventListener('click', () => {
      listPokemonsNames(pokemonData);
    });

    document.body.appendChild(btn);

    const container = document.createElement('div');
    container.id = 'containerId';
    document.body.appendChild(container);
  } catch (error) {
    console.error(error);
  }
}

async function fetchImage(data) {
  const fetchingImage = await fetchData(data);
  const image = document.createElement('img');
  image.src = fetchingImage.sprites.back_default;
  image.alt = fetchingImage.name;
  image.classList.add('imageStyling');

  const divContainer = document.getElementById('containerId');
  divContainer.textContent = '';
  divContainer.appendChild(image);
}

async function main() {
  try {
    return fetchAndPopulatePokemons(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
  } catch (error) {
    console.error(error.status);
  }
}

window.addEventListener('load', main);
