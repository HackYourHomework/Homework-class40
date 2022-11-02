'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-die

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDie()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDie()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

function rollDie() {
  return new Promise((resolve, reject) => {
    // Compute a random number of rolls (3-10) that the die MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      // Compute a random die value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      // Use callback to notify that the die rolled off the table after 6 rolls
      if (roll > 6) {
        reject(new Error('Oops... Die rolled off the table.'));
      }

      // Use callback to communicate the final die value once finished rolling
      if (roll === randomRollsToDo) {
        resolve(value);
      }

      // Schedule the next roll todo until no more rolls to do
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };

    // Start the initial roll
    rollOnce(1);
  });
}

function main() {
  rollDie()
    .then((value) => {
      console.log(`Success! Die settled on ${value}.`);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

/*

## HERE ARE THE CALLBACK OUTPUTS :

>> Die scheduled for 10 rolls...
>> Die value is now: 5
>> Die value is now: 2
>> Die value is now: 1
>> Die value is now: 5
>> Die value is now: 1
>> Oops... Die rolled off the table.
>> Die value is now: 3
>> Oops... Die rolled off the table.
>> Die value is now: 6
>> Oops... Die rolled off the table.
>> Die value is now: 4
>> Oops... Die rolled off the table.
>> Success! Die settled on 4.

** Above we notice that callback functions will still loop till it fullfil the Success Output, So, to solve such problem 
** we used the Promise function with two parameters (resolve, reject) as it shown below: these functions solved Callbacks
** so when our function success it will print the RESOLVE STATUS right away !! else it will show the reject error message and stop right there...

## Here are the modified Outputs: they are completely randomly working ... If the rolls < 6 the output will as shown below
>> Die scheduled for 6 rolls...
>> Die value is now: 1
>> Die value is now: 3
>> Die value is now: 4
>> Die value is now: 2
>> Die value is now: 6
>> Success! Die settled on 6.

## if the rolls are over then > 6 the console will type an Error message for us ... as shown below:

>> Die scheduled for 10 rolls...
>> Die value is now: 1
>> Die value is now: 5
>> Die value is now: 6
>> Die value is now: 5
>> Die value is now: 3
>> Die value is now: 6
>> Die value is now: 1
>> Oops... Die rolled off the table.
>> Die value is now: 4
>> Die value is now: 5
>> Die value is now: 3

*/
