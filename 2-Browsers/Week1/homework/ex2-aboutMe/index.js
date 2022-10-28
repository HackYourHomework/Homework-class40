'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

document.getElementById('nickname').textContent = 'Mohammed';
document.getElementById('fav-food').textContent = 'Mandy';
document.getElementById('hometown').textContent = 'Yemen';

document.body.style.fontFamily = 'Arial, sans-serif';

const allInOne = document.querySelectorAll('ul li');
allInOne.forEach((element) => {
  element.classList.add('list-item');
});
