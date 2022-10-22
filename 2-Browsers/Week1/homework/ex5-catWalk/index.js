'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
const catImage = document.querySelector('img');
catImage.style.cssText = 'left:0';
let moveToLeft = 0;
let timeoutID;
let intervalID;

const rect1 = catImage.getBoundingClientRect();
const imageWidth = rect1['width'];

const screenCenter = screen.width / 2 - imageWidth;

function imageInCenter() {
  catImage.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
  clearTimeout(timeoutID);
  intervalID = setInterval(catWalk, 100);
}

function catWalk() {
  moveToLeft = moveToLeft + 10;

  if (moveToLeft < screenCenter) {
    catImage.style.left = moveToLeft + 'px';
  } else if (moveToLeft - screenCenter < 10) {
    catImage.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    clearInterval(intervalID);
    timeoutID = setTimeout(imageInCenter, 5000);
  } else if (moveToLeft > screenCenter && moveToLeft < screenCenter * 2) {
    catImage.style.left = moveToLeft + 'px';
  } else if (moveToLeft > screenCenter * 2) {
    catImage.style.left = 0 + 'px';
    moveToLeft = 0;
  }
}
window.onload = () => (intervalID = setInterval(catWalk, 100));
