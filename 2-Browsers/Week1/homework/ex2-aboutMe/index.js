'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
document.body.style.fontFamily = 'Arial, sans-serif';
const nickname = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
const hometown = document.getElementById('hometown');

nickname.textContent = 'Lana';
favFood.textContent = 'Fruits';
hometown.textContent = 'Kyiv';

const li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
  li[i].setAttribute('class', 'list-item');
}
