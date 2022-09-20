'use strict';
/* -----------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-1-you-are-amazing

1. Complete the function named `giveCompliment`as follows:

   - It should take a single parameter: `name`.
   - Its function body should include a variable that holds an array,
     `compliments`, initialized with 10 strings. Each string should be a
     compliments, like `"great"`, `"awesome"` and so on.
   - It should randomly select a compliments from the array.
   - It should return the string "You are `compliments`, `name`!", where
     `compliments` is a randomly selected compliments and `name` is the name that
     was passed as an argument to the function.

2. Call the function three times, giving each function call the same argument:
   your name.
   Use `console.log` each time to display the return value of the
   `giveCompliment` function to the console.
-----------------------------------------------------------------------------*/
function giveCompliment(name) {
  const compliments = [
    'perfect',
    'awesome',
    'amazing',
    'nice',
    'smart',
    'Excellent',
    'That’s great!',
    'Good grades!',
    'Well done',
    'Nice work',
  ];
  const randomNumber = Math.floor(Math.random() * (10 - 0) + 0);

  return `You are ${compliments[randomNumber]}, ${name}!`;
}

function main() {
  const myName = 'HackYourFuture';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
