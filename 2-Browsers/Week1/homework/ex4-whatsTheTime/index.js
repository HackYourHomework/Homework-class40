'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const newDiv = document.createElement('div');
newDiv.id = 'time';
function addCurrentTime() {
 const date = new Date();
 const hours = date.getHours();
 const minutes = date.getMinutes();
 const seconds = date.getSeconds();
 const time = `${hours}:${minutes}:${seconds}`
 document.getElementById('time').textContent = time;
}
setInterval(loadWindow, 1000);
const loadWindow = ()=> {window.addEventListener('load', addCurrentTime);}
