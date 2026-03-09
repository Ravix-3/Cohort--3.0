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
cleanfile("a.txt")
   .then(function(){
        console.log("a.txt has been cleaned successfully.");
        cleanfile("a1.txt")
        .then(function(){
          console.log("a1.txt has been cleaned successfully.");
           cleanfile("a3.txt")
           .then(function(){
            console.log("a3.txt has been cleaned successfully");
             cleanfile("b.txt")
             .then(function(){
              console.log("b.txt has been cleaned successfully");
               cleanfile("c.txt")
                .then(function(){
                  console.log("c.txt has been cleaned successfully");
                })
              })
             })
           })
        })
      
cleanfile("a.txt")
.then(function(){
  console.log("a.txt has been cleaned successfully");
})

cleanfile("a1.txt")
.then(function(){
  console.log("a1.txt has been cleaned successfully.");
})

cleanfile("a2.txt")
  .then(function(){
    console.log("a2.txt has been cleaned successfully.");
  })

cleanfile("a3.txt")
 .then(function(){
  console.log("a3.txt has been cleaned successfully.");
 })

cleanfile("a4.txt")
 .then(function(){
  console.log("b.txt has been cleaned successfully");
 })

cleanfile("c.txt")
.then(function(){
  console.log("c.txt has been cleaned successfully");
})
