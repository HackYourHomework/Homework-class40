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
parameters and return values to pass data back and forth. "https://pokeapi.co/api/v2/pokemon/148/"
------------------------------------------------------------------------------*/
// created default fetching function here -------------------
async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}
// ================================================================

// populate the select  created ---------------------------------
function fetchAndPopulatePokemons(data) {
  const body = document.querySelector('body');

  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  const container = document.createElement('div');
  container.classList.add('container');
  btn.textContent = 'Get Pokemon';
  body.appendChild(container);
  container.appendChild(btn);

  const newData = fetchData(data);
  const select = document.createElement('select');
  select.classList.add('selected');
  container.appendChild(select);

  const populate = () => {
    return newData.then((data) => {
      return data.map((item, index) => {
        const option = document.createElement('option');
        option.classList.add('pokemon');
        option.setAttribute('value', index);
        select.appendChild(option);
        option.textContent = item.name;

        option.onclick = fetchImage;
      });
    });
  };
  btn.addEventListener('click', populate);
  const populateImg = () => {
    const selected = parseInt(select.options[select.selectedIndex].value) + 1;

    fetchImage(selected);
  };
  select.addEventListener('change', populateImg);
}

// ===========================================

function fetchImage(index) {
  const container = document.querySelector('.container');
  const image = document.createElement('img');
  container.appendChild(image);
  return fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
    .then((data) => data.json())
    .then((data) => (image.src = data.sprites['back_default']));
}
// ==============================================================================================

function main() {
  fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon?limit=151');
}
window.addEventListener('load', main);
