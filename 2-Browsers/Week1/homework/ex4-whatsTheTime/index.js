'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hours, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const clock = document.createElement('p');
document.body.appendChild(clock);
function addCurrentTime() {
  const myDate = new Date();
  const hours = myDate.getHours();
  const minutes = myDate.getMinutes();
  const seconds = myDate.getSeconds();
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
window.addEventListener('load', addCurrentTime);
window.setInterval(addCurrentTime, 1000);
