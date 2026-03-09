const fs = require('fs');

function cleanfile(filename){
  return new Promise((resolve , reject) =>{
    fs.readFile(filename , "utf-8",function(err , content){
      if(err){
        reject(err);
      }
      else
      {
        let trimmedContent = content.trim();
        fs.writeFile(filename, trimmedContent, function(err){
         if(err){
          reject(err);
          }
          else{
            resolve({content, trimmedContent});
          }
         });
      }
    });
  });
}
async function main(){
  try{
    await cleanfile("a.txt");
    console.log("File has been cleaned successfully.");
  }
  catch(err){
    console.log("Error cleaning file: ", err);
  }
}
main();