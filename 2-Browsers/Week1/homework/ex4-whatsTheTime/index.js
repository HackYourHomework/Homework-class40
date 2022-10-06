'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function addCurrentTime() {
  // TODO complete this function
  const today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  let currentTime = `${h}:${m}:${s}`;
  console.log(currentTime);
}

// TODO execute `addCurrentTime` when the browser has completed loading the page
window.onload = () => setInterval(addCurrentTime, 500);
