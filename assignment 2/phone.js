const phone = "09182229988";
const subString = phone.slice(4, 7);

const finalPhone = phone.replace(subString, "***");
console.log(finalPhone);
