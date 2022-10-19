'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const watch = document.createElement('p');
document.body.appendChild(watch);
function addCurrentTime() {
  const myDate = new Date();
  const hour = myDate.getHours();
  const minute = myDate.getMinutes();
  const seconds = myDate.getSeconds();
  watch.textContent = hour + ':' + minute + ':' + seconds;
}

window.addEventListener('load', addCurrentTime);
window.setInterval(addCurrentTime, 1000);
