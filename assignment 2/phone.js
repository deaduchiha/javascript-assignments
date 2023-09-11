const phone = "09182229988";
// const subString = phone.slice(4, 7);
// const sign = "***";
// const finalPhone = phone.replace(subString, sign);
const finalPhone = phone.replace(phone.slice(4, 7), "***");
console.log(finalPhone);
