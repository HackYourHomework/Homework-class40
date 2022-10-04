'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
// CREATION OF NEEDED ELEMENTS ================ 
const hr  = document.createElement('h1');
const min  = document.createElement('h1');
const sec = document.createElement('h1');
const body = document.querySelector('body')
const container = document.createElement('div');
// =================== ================ 

// APPENDING ELEMENTS ================ 
body.appendChild(container);
container.appendChild(hr);

container.appendChild(min);
container.appendChild(sec);
// =========================

// STYLING OF ELEMENTS ================ 

body.style.display ='grid';
body.style.placeItems ='center';
body.style.height ='100vh';

// container.style.background = 'red';
container.style.display = 'flex';
container.style.gap = '1rem';

container.style.padding = '1rem';

container.style.border = '1px solid #add8e6';
container.style.borderRadius = '10px';

body.style.fontFamily =' sans-serif'


body.style.background =' rgba(0,0,0,0.8)'
body.style.color = 'black'

for(let i =0; i<container.children.length;i++){
  container.children[i].style.background = 'white';
  container.children[i].style.padding = '10px';
  container.children[i].style.borderRadius = '15px';
  container.children[i].style.width = '60px';
  container.children[i].style.display = 'flex';
  container.children[i].style.justifyContent = 'center';
  container.children[i].style.alignItems = 'center';


}

// END OF STYLING ELEMENTS ==================================

function addCurrentTime() {
 const time = new Date();



let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();



hr.textContent = hours;
min.textContent = minutes;
sec.textContent = seconds;

console.log(`${hours}:${minutes}:${seconds}`);

}

const updateClock = () => {
 const updateTimer = setInterval(() =>{

  addCurrentTime()

}
,1000)
// NO NEED HERE BUT I ALWAYS CHECK TO CLEAN UP INTERVAL.....
return () => clearInterval(updateTimer)


}



// TODO execute `addCurrentTime` when the browser has completed loading the page

window.addEventListener('load', updateClock);
