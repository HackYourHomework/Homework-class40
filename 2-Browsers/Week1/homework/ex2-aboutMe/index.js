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
  if (tagMatch.id === 'nickname') {
    addRedColor;
    tagMatch.textContent = 'Jan';
  } else if (tagMatch.id === 'fav-food') {
    addRedColor;
    tagMatch.textContent = 'Pumpkin';
  } else {
    addRedColor;
    tagMatch.textContent = 'Kayseri';
  }
});

document.body.style.fontFamily = 'Arial,sans-serif';
