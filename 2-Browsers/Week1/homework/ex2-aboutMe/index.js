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
  const tagMatch = liTag.childNodes[1];
  const addRedColor = liTag.classList.add('list-item');
  switch (tagMatch.id) {
    case 'nickname':
      addRedColor;
      tagMatch.textContent = 'Jan';
      break;
    case 'fav-food':
      addRedColor;
      tagMatch.textContent = 'Jan';
      break;
    default:
      addRedColor;
      tagMatch.textContent = 'Kayseri';
      break;
  }
});

document.body.style.fontFamily = 'Arial,sans-serif';
