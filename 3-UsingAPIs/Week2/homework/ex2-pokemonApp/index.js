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
//still work on it
const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error('HTTP or network errors');
 
}

function createElements(){
  const button = document.createElement('button');
  const img = document.createElement('img');
  const select = document.createElement('select');

  button.textContent = 'Get pokemon!';
  img.getAttribute('src', '');
  img.getAttribute('alt', 'pokemon');

  document.body.appendChild(button);
  document.body.appendChild(img);
  document.body.appendChild(select);

}
  
  async function fetchAndPopulatePokemons() {
    try {
      const select = document.querySelector('select')
      const data = await fetchData(url);
      const dataArray = data.results
  
      dataArray.forEach((element) => {
        const optionEl = document.createElement('option')
        optionEl.textContent = `${element.name}`
        optionEl.value = element.url
        select.appendChild(optionEl);
      })
    } catch (err) {
      console.log(err);
    }
  }
  
  
async function fetchImage() {
  try {
    const img = document.querySelector('img')
    const data = await fetchData(url);
    const dataArray = data.results

    img.src = dataArray.url;
  } catch (err) {
    console.log(err);
  }
}



function main() {
  createElements();
  button.addEventListener('click', () => {
    fetchAndPopulatePokemons();
  });

  select.addEventListener('change', () => {
    fetchImage();
  });
}

window.addEventListener('load', main);

