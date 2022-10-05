'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments (in the order listed): 
     * the array with the options for the number of children, 
     * the array with the options for the partner's name, 
     * the array with the options for the geographic location and 
     * the array with the options for the job title.
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/


function selectRandomly(arrayParameter) {
  const randomIndex = Math.floor(Math.random() * arrayParameter.length); 
  const randomElement = arrayParameter[randomIndex];
  return randomElement;
}

function tellFortune(kindNum,partnerName,jobLocation,jobName) {
 
   const kindNumber=selectRandomly(kindNum);
   const nameYourPartner=selectRandomly(partnerName);
   const locationOfJob=selectRandomly(jobLocation);
   const nameOfJob=selectRandomly(jobName); 

   return "You will be a " + nameOfJob + " in " + locationOfJob +", married to " + nameYourPartner + " with " + kindNumber + " kids.";

}

function main() {
  const numKids = [
    2,4,1,7,3
  ];

  const partnerNames = [
    "Lila", "Katrina","Suzan","MARY", "Madonna"
  ];

  const locations = [
    "Amersfoort", "Amsterdam","Rotterdam","London", "Utrecht"
  ];

  const jobTitles = [
    "Teacher", "Web Developer", "Officer", "Driver","Football player"
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
