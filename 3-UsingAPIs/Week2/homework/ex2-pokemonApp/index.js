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
  const pokData = await fetchData(data);

  const selectElement = document.createElement('select');
  const imgContainer = document.createElement('div');
  const button = document.createElement('button');
  button.setAttribute('type', 'button');

  button.textContent = 'Get Pokemon';

  button.addEventListener('click', () => {
    pokData.results.forEach((result) => {
      const { name, url } = result;

      const option = document.createElement('option');
      option.text = name;
      option.value = url;
      selectElement.appendChild(option);
    });

    selectElement.addEventListener('change', (e) => {
      fetchImage(e.target.value, imgContainer);
    });
  });

  document.body.appendChild(button);
  document.body.appendChild(selectElement);
  document.body.appendChild(imgContainer);
}

async function fetchImage(url, imgContainer) {
  const imgSrc = await fetchData(url);
  const img = document.createElement('img');
  img.src = imgSrc.sprites.front_shiny;
  img.alt = imgSrc.name;
  imgContainer.textContent = ' ';
  imgContainer.appendChild(img);
}

async function main() {
  try {
    return fetchAndPopulatePokemons(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
  } catch (err) {
    console.log(err);
  }
}

main();
