const fullStack = [
  ["html", "css", "js", "react"],
  ["node", "express", "mongo"],
];
// const front = fullStack[0]; // we dont want use this method anymore
// const backend = fullStack[1]; // we dont want use this method anymore
const [front, backend] = fullStack;
const [html, , , react] = front;
console.log(html);
