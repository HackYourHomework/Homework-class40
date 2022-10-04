'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
window.onload = function () {
  const currentDateElement = document.createElement('p');
  currentDateElement.setAttribute('id', 'date');
  document.body.appendChild(currentDateElement);

  function addCurrentTime() {
    const currentDate = new Date();
    const dateString = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()} `;
    document.getElementById('date').textContent = dateString;
    console.log(dateString);
  }
  setInterval(addCurrentTime, 1000);
};
