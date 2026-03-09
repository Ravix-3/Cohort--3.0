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
  return new Promise(function(resolve, reject){
    cleanfile(prefix + "1.txt")
    .then(function(){
         cleanfile(prefix + "2.txt")
           .then(function(){
             cleanfile(prefix + "3.txt")
                .then(function(){
                   resolve();
                })
                .catch(function(){
                  reject();  
                });
           })
           .catch(function(){
             reject();
           });   
        })
    .catch(function(){
      reject();
    });
  })  
} 
cleanManyFiles("a")
.then(function(){
  console.log("All files have been cleaned successfully.");
})
.catch(function(){
  console.log("Error cleaning files.");
});

let p = cleanManyFiles("a");
console.log(p);