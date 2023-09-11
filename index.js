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
const name = "Alireza";
const age = 22;

const text = `hello my name is ${name} and im ${age} years old.`;
console.log(text);
