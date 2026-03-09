const fs = require('fs');

// asynchronous operation
fs.readFile('a.txt', 'utf-8',(err, data) => {
  if(err){
    console.log("Error Reading the file",err);
  }
  else{
    console.log("File data",data);
  }
});
console.log("Hi Ravi , Are you enjoying the learning");