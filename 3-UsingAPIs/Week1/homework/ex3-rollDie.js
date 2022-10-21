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
  // Compute a random number of rolls (3-10) that the die MUST complete
  const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
  console.log(`Die scheduled for ${randomRollsToDo} rolls...`);
  return new Promise((resolve, reject) => {
    for (let i = 1; i <= randomRollsToDo; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      if (randomRollsToDo <= 6) {
        if (i === randomRollsToDo) {
          resolve(value);
        }
      }
      if (i > 5) {
        reject(new Error('Oops... Die rolled off the table.'));
        return;
      }
    }
  });
}

function main() {
  rollDie()
    .then((val) => {
      console.log(`Success! Die settled on ${val}.`);
    })
    .catch((error) => {
      return console.error(error);
    });
}
// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

//the reason why we do not have the issue now is because I handled it this way -- if random number <= 6; i create a resolve that sends the val
//then handle it with then()....
//  if the random number is over 6 i created an if condition that rejects and returns.
