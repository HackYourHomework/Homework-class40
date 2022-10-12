'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

document.getElementsById("nickname").textContent="Anna"
document.getElementsById("fav-food").textContent="see-food"
document.getElementsById("hometown").textContent="Amsterdam"
const allLi = document.getElementsByTagName('li')
allLi.forEach((li)=>
li.classList.add('list-item'))
document.body.style.fontFamily = 'Arial, sans-serif';
