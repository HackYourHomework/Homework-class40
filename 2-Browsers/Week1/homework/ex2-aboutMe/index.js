'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

document.body.style = 'font-family: Arial, sans-serif';
document.getElementById('nickname').textContent = 'Tom';
document.getElementById('fav-food').textContent = 'Mandy';
document.getElementById('hometown').textContent = 'Yemen';

const allLiElement = document.querySelectorAll('li');
allLiElement.forEach((liElement) => {
  liElement.classList = 'list-item';
});
