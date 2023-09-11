// get 4th char
// const text = "Alireza";
// console.log(text[4]); // e

// - - - - - - - - - - -

// index of
// const text = "alireza";
// console.log(text.indexOf("l")); // 1 ** if take -1 its meaning its not exist

// - - - - - - - - - - -

// charAt => find text char with index
// const text = "alireza";
// console.log(text.charAt(0)); // a

// - - - - - - - - - - -

// split("") => if we used empty ("") split all characters for us
// const text = "alireza is developer";
// console.log(text.split(" ")); // [ 'alireza', 'is', 'developer' ] => based on input char its split our text in an array

// - - - - - - - - - - -

// replace => replace our text
// const text = "alireza is developer";
// console.log(text.replace("alireza", "shole")); // shole is developer

// - - - - - - - - - - -

// concat
// const text = "alireza";
// const text2 = " nikzad";
// console.log(text.concat(text2)); // alireza nikzad
// console.log(text.concat(" ", text2, " zeidi")); // alireza nikzad

// - - - - - - - - - - -

// trim => remove white spaces
// const text = "  alireza nikzad  ";
// console.log(text.trim());

// - - - - - - - - - - -

// slice
// const text = "Alireza Nikzad";
// console.log(text.slice(0, 4)); // Alir => showing our index of text from first number index to end number index
// const text = "alireza";
// console.log(text[0].toUpperCase());

// - - - - - - - - - - -

// template literals
// const name = "Alireza";
// const age = 22;

// const text = `hello my name is ${name} and im ${age} years old.`;
// console.log(text);

// - - - - - - - - - - -

// how to create array
// const firstArray = [1, 2, 3];
// console.log(firstArray);
// const secondArray = Array(4, 5, 6);
// console.log(secondArray);

// const array = [];
// console.log(array);

const myArray = ["alireza", true, 22, 1, 2, 3];
// myArray.push("nikzad"); // add one item to array usu PUSH
// myArray.unshift("nikzad"); // add one item to first of array
// myArray.pop(); // delete last index of array
// myArray.shift() //delete first index of array
// const newArray = myArray.toString(); // change array to string
// delete myArray[0]; // empty array (not so good)
// myArray[1] = false; // change a value of array
// const temp = myArray.join(); // change all to string
// const temp = myArray.join(""); // change all to string without any spaces
// const temp = myArray.join("**"); // change all to string and add ** after each index
// - - - - - -
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = array1.concat(array2); // we can concat array 1 and 2 with each other
// - - - - - -
// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
// ]; // nested array
// const newArray = array.flat(); // sync all nested arrays in one array
// - - - - - -
// myArray.indexOf("alireza"); // found index of ...
// myArray.includes('alireza') // check the ... is include in our array (true - false)
// const newArray = myArray.slice(3, 6); //showing us index between X until Y
// const newArray = myArray.splice(1, 2); // for deleting from index X to Y
console.log();
