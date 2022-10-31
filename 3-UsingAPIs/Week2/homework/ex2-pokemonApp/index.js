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

function main() {
  const selectElement = document.getElementById('pokemonSelect');
  const imgPokemon = document.getElementById('imgPokemonId');

  function fetchData(url) {
    return fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch');
      }
    });
  }

  async function fetchAndPopulatePokemons(url) {
    try {
      const pokemons = await fetchData(url).then((res) => res.results);

      //Create and append select list
      const pokemonDiv = document.getElementById('pokemonDiv');
      pokemonDiv.textContent = '';
      pokemonDiv.appendChild(selectElement);

      pokemons.forEach((pokemon) => {
        const option = document.createElement('option');
        option.value = pokemon.url;
        option.text = pokemon.name;
        selectElement.appendChild(option);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchImage(url) {
    try {
      const pokemon = await fetchData(url);
      imgPokemon.src = pokemon.sprites.back_default;
    } catch (error) {
      console.error(error);
    }
  }

  const btnPokemon = document.getElementById('btnPokemon');
  btnPokemon.addEventListener('click', () => {
    selectElement.style = 'display:block';
    fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon?limit=151');
  });

  selectElement.addEventListener('change', (event) => {
    fetchImage(event.target.value);
  });
}

window.addEventListener('load', main);
