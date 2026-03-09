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
       let filecontent1 = await fsReadFilePromisified('a.txt', 'utf-8');
       console.log(filecontent1);
       let filecontent2 = await fsReadFilePromisified('b.txt', 'utf-8');
       console.log(filecontent2);
       let filecontent3 = await fsReadFilePromisified('c.txt', 'utf-8');
       console.log(filecontent3);
}
main();
console.log("Hi");
console.log("Hello");

