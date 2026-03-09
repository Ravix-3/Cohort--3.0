const fs = require('fs');

function cleanfile(filename , encoding){
   return new Promise((resolve , reject) =>{
    fs.readFile(filename , encoding, function(err , content){
      if(err)
        {
        reject(err);
        } 
        else
        {
          let trimmedcontent = content.trim();
          fs.writeFile(filename , trimmedcontent , function(err){
            if(err)
            {
              reject(err);
            }
            else
            {
              resolve({content,trimmedcontent});
            }
          });
        }
    });
   });
}
cleanfile("a.txt", "utf-8")
.then(function(result){
    console.log(result.content);
    console.log(result.trimmedcontent);
    if(result.content === result.trimmedcontent)
    {
      console.log("File is already clean.");
    }
    else{
      console.log("File has been cleaned.");
    }
})
.catch(function(err){
  console.log(err);
});