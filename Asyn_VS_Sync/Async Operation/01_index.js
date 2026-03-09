const fs = require("fs");

function readFileCallback(err, data) {
  if(err){
    console.log("Error Reading the file",err);
  }
  else{
    console.log("File data",data);
  }
}

// asynchronous operation
fs.readFile("a.txt", "utf-8", readFileCallback);

// computational logic
let sum=0;
for(let i=0; i<1000000000; i++){
  sum += i;
}
console.log("sum is ",sum);