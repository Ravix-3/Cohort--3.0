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
function cleanManyFiles(prefix){
  return new Promise(async function(resolve , reject){
    try{
       await cleanfile(prefix + "1.txt");
       await cleanfile(prefix + "2.txt");
       await cleanfile(prefix + "3.txt");
       resolve();
    }
    catch(err){
      reject();
    }
  });
}
cleanManyFiles("a")
.then(function(){
  console.log("All files have been cleaned successfully.");
})
.catch(function(){
  console.log("Error cleaning files.");
});