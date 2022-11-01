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
const URL_FETCH = `https://pokeapi.co/api/v2/pokemon?limit=151`;

async function fetchData(url) {
  const fetchedData = await fetch(url);
  const parsedData = await fetchedData.json();
  return new Promise((resolve, reject) => {
    if (fetchedData.ok) {
      resolve(parsedData);
    } else {
      console.log(`Error Message: ${reject}`);
    }
  });
}

function fetchAndPopulatePokemons() {
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('button-div');
  const buttonElement = document.createElement('button');
  buttonElement.classList.add('button');
  document.body.appendChild(buttonDiv);
  buttonDiv.appendChild(buttonElement);
  buttonElement.textContent = 'Get Pokemon!';
  buttonElement.type = 'button';
  const selectDiv = document.createElement('div');
  selectDiv.classList.add('select-div');
  const selectElement = document.createElement('select');
  selectElement.classList.add('select');
  document.body.appendChild(selectDiv);
  selectDiv.appendChild(selectElement);
  buttonElement.addEventListener('click', getPokemon);

  async function getPokemon() {
    try {
      const pokemonsData = await fetchData(URL_FETCH);
      pokemonsData.results.forEach((element) => {
        const optionElement = document.createElement('option');
        selectElement.appendChild(optionElement);
        optionElement.textContent = element.name;
        optionElement.value = element.name;
        console.log(element.img);
        selectElement.addEventListener('change', (event) => {
          if (event.target.value === element.name) {
            fetchImage(element.url);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

async function fetchImage(url) {
  try {
    const fetchedImageData = await fetch(url);
    const parsedImageData = await fetchedImageData.json();
    if (document.images.length < 1) {
      const imageElement = document.createElement('img');
      imageElement.classList.add('pokemon-image');
      document.body.appendChild(imageElement);
      imageElement.src = parsedImageData.sprites.front_default;
    } else {
      document.getElementsByClassName('pokemon-image')[0].src =
        parsedImageData.sprites.front_default;
    }
  } catch (error) {
    console.log(error);
  }
}

function main() {
  fetchAndPopulatePokemons();
}

window.addEventListener('load', main);
