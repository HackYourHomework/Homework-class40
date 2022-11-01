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
    throw new Error('Failed to fetch');
  }
  return response.json();
}

async function fetchAndPopulatePokemons(url, select) {
  try {
    const data = await fetchData(url);
    data.results.forEach((element) => {
      const option = document.createElement('option');
      option.value = element.url;
      option.textContent = element.name;
      select.appendChild(option);
    });
  } catch (err) {
    console.log('Error:' + err);
  }
}

async function fetchImage(url, div) {
  try {
    div.textContent = '';
    const data = await fetchData(url);
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', data.sprites.front_default);
    div.appendChild(imgElement);
  } catch (error) {
    console.log(error);
  }
}

function main() {
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  try {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Get Pokemons!';
    document.body.appendChild(button);

    const select = document.createElement('select');
    document.body.appendChild(select);

    const div = document.createElement('div');
    document.body.appendChild(div);

    div.getAttribute('src', '');
    div.getAttribute('alt', 'pokemon');

    button.addEventListener('click', async () => {
      await fetchAndPopulatePokemons(URL, select);
    });

    select.addEventListener('change', async (e) => {
      const url = e.target.value;
      await fetchImage(url, div);
    });
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
