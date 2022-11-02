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
      const data = await response.json();
      return data;
    } else {
      throw 'error';
    }
  } catch (err) {
    console.log(err);
  }
}

async function fetchAndPopulatePokemons(data) {
  const pokemonData = await fetchData(data);
  const container = document.createElement('div');
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.textContent = 'Get Pokemon';
  const select = document.createElement('select');
  btn.addEventListener('click', () => {
    pokemonData.results.forEach((element) => {
      const { name, url } = element;
      const option = document.createElement('option');
      option.text = name;
      option.value = url;
      select.appendChild(option);
    });
    select.addEventListener('change', (el) => {
      fetchImage(el.target.value, container);
    });
  });
  document.body.appendChild(btn);
  document.body.appendChild(select);
  document.body.appendChild(container);
}

async function fetchImage(url, container) {
  const imageSrc = await fetchData(url);
  const img = document.createElement('img');
  img.src = imageSrc.sprites.front_default;
  img.alt = imageSrc.name;
  container.textContent = ' ';
  container.appendChild(img);
}

function main() {
  try {
    return fetchAndPopulatePokemons(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
  } catch (err) {
    console.log(err);
  }
}
main();
