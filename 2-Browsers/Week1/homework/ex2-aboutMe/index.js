'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const liTags = document.querySelectorAll('ul li');
liTags.forEach((liTag) => {
  if (liTag.childNodes[1].id === 'nickname') {
    liTag.classList.add('list-item');
    liTag.childNodes[1].textContent = 'Jan';
  } else if (liTag.childNodes[1].id === 'fav-food') {
    liTag.classList.add('list-item');
    liTag.childNodes[1].textContent = 'Pumpkin';
  } else {
    liTag.classList.add('list-item');
    liTag.childNodes[1].textContent = 'Kayseri';
  }
});

document.body.style.fontFamily = 'Arial,sans-serif';
