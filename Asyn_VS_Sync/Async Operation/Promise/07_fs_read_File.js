const fs = require("fs");

function fsReadFilePromisified(filePath, encoding) {
    return new Promise( function(resolve , reject){
      fs.readFile(filePath, encoding, function(err, data){
        if(err){
          reject(err);
        }
        else
        {
          resolve(data);
        }
      })
    })
}

fsReadFilePromisified("file.txt", "utf-8")
.then(function(data){
  console.log(data);
})
.catch(function(err){
  cosole.log(err);
});