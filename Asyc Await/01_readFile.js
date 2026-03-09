const fs = require("fs");

function fsReadFilePromisified(filePath,encoding){
   return new Promise((resolve, reject) =>{
     fs.readFile(filePath, encoding, (err, data) =>{
        if(err){
          reject(err);
        }
        else
        {
          resolve(data);
        }
     });
   });
}
async function main(){
    fsReadFilePromisified("a.txt", "utf-8")
    .then(function (data){
      console.log(data);
        fsReadFilePromisified("b.txt", "utf-8")
        .then(function(data){
         console.log(data);
            fsReadFilePromisified("c.txt", "utf-8")
            .then(function(data){
              console.log(data);
            })
            .catch(function(err){
              console.log("Error reading c.txt: ", err);
            })
       })
    })
}
// shortand for above code
async function main(){
  let filecontent1 = fsReadFilePromisified("a.txt", "utf-8");
  let filecontent2 = fsReadFilePromisified("b.txt", "utf-8");
  let filecontent3 = fsReadFilePromisified("c.txt", "utf-8");

  console.log(filecontent1);
  console.log(filecontent2);
  console.log(filecontent3);
}
main();