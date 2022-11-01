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

const publicApi = 'https://pokeapi.co/api/v2/pokemon?limit=151';

async function fetchData(url) {
  const response = await fetch(url);
  console.log(response);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    throw new Error('Can not fetch data');
  }
}

async function fetchAndPopulatePokemons() {
  try {
    const selectEl = document.getElementById('select');
    const data = await fetchData(publicApi);
    const dataArray = data.results;
    console.log(dataArray);

    dataArray.forEach((pokemon, index) => {
      const optionEl = document.createElement('option');
      optionEl.textContent = `${index + 1}-${pokemon.name}`;
      selectEl.appendChild(optionEl);
    });

    selectEl.onchange = fetchImage;
  } catch (err) {
    console.log(err);
  }
}

async function fetchImage(event) {
  const selected = event.target.value;
  console.log(selected);
  const numberOfSelected = selected.split('-')[0];
  const resForSelected = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${numberOfSelected}`
  );
  const resJson = await resForSelected.json();
  const img = resJson.sprites.back_default;
  console.log(img);
  const pokemonImg = document.getElementById('img');
  pokemonImg.src = img.toString();
}

function createElement() {
  document.body;
  const buttonEl = document.createElement('button');
  buttonEl.id = 'btn';
  buttonEl.type = 'button';
  buttonEl.style.marginBottom = '10px';
  buttonEl.textContent = 'See Pokemons!';
  document.body.appendChild(buttonEl);

  const selectEl = document.createElement('select');
  selectEl.id = 'select';
  document.body.appendChild(selectEl);

  const imageEl = document.createElement('img');
  imageEl.id = 'img';
  imageEl.alt = 'pokemonImage';
  imageEl.src = ' ';
  imageEl.style.width = '100px';
  document.body.appendChild(imageEl);

  document.body.style.display = 'inline-grid';
}

function main() {
  createElement();
  document
    .getElementById('btn')
    .addEventListener('click', fetchAndPopulatePokemons);
}

window.addEventListener('load', main);
