const fullName = "Alireza Nikzad";
const spaceIndex = fullName.indexOf(" ");

const firstName = fullName.slice(0, spaceIndex);
const lastName = fullName.slice(spaceIndex + 1);
console.log(firstName);
console.log(lastName);
