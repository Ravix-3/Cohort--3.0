// callback based , sync function calls...
const fs = require('fs');

let contents = fs.readFileSync("a.txt","utf-8");
console.log(contents);
let trimcontent = contents.trim();
fs.writeFileSync("a.txt", trimcontent);
console.log(trimcontent);