// This is a blocking code, it will block the execution of next line until it reads the file completely and then it will print the contents of the file.
// This is a synchronous code , therefore javascript thread will be free and ideal.
const fs = require("fs");

const content = fs.readFileSync("a.txt","utf-8");
console.log(content);

const content1 = fs.readFileSync("b.txt","utf-8");
console.log(content1);

const content2 = fs.readFileSync("c.txt","utf-8");
console.log(content2);