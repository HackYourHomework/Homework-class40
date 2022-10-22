'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // https://tecadmin.net/get-current-date-time-javascript/
  const today = new Date();
  let hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds();

  if (minute < 10) minute = '0' + minute;
  if (hour < 10) hour = '0' + hour;
  if (second < 10) second = '0' + second;
  const time = hour + ':' + minute + ':' + second;
  return time;
}
// // https://www.w3schools.com/jsref/met_win_setinterval.asp

window.onload = () => setInterval(addCurrentTime, 1000);
