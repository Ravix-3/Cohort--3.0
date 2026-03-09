const fs = require('fs');

// without using promise and async await, we can do callback based async function calls like below
function cleanFile(filename, encoding){
fs.readFile(filename , encoding, function(err , content){
    let trimmedcontent = content.trim();
    fs.writeFile(filename , trimmedcontent, function(){
       console.log("File write completed");
    });
});
}
cleanFile("a.txt", "utf-8");


function cleanFile1(filename , cb) //cb is a function which we are passing as an argument to cleanFile1 function, and we will call that function once the file write is done.
{
  fs.readFile(filename, "utf-8", function(err , content){
    let trimmedcontent = content.trim();
    fs.writeFile(filename , trimmedcontent ,function(){
      cb();
    })
  });
}
cleanFile1("a.txt", function(){
  console.log("File write Done");
});