// Challenge
// 1. create an array
// 2. add your favorite sport
// 3. use this list in text
// 4. remove last item from list
// 5. create a new array for the first two items then replace it in main array

const sports = []; // create array
sports.push("football");
sports.push("basketball");
sports.push("box");
sports.push("kick box");
// adding fav sports
const stringSports = sports.join(", "); // change to string
const text = `my favorite sport are ${stringSports}`; // add all in a text
const lastIndex = sports.length - 1;
sports.splice(lastIndex); // remove last index we can set to parameter START to END
const newSports = sports.slice(0, 2); // adding first two index of array into a new array
sports.splice(0, 2, newSports); // add newSports array instead of our array for sports
console.log(sports);
