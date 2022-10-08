'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
document.body.style.fontFamily = `Arial, sans-serif`;
const nickname = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
const hometown = document.getElementById('hometown');

nickname.textContent = ' AB';
favFood.textContent = 'Pizza';
hometown.textContent = 'Asmara';

const ul = document.querySelector('ul');

const list = ul.children;
for (let i = 0; i < list.length; i++) {
  list[i].setAttribute('class', 'list-item');
}
