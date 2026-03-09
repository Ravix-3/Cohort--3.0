const fs = require("fs");

function fsreadWriteFilePromisified(filename, encoding){
  return new Promise(function(resolve, reject){

    fs.readFile(filename, encoding, function(err, data){

      if(err){
        reject(err);
        return;
      }

      let updated = data.toUpperCase();

      fs.writeFile(filename, updated, function(err){

        if(err){
          reject(err);
        }else{
          resolve("File updated successfully");
        }

      });

    });

  });
}

fsreadWriteFilePromisified("a.txt","utf-8")
.then(function(result){
  console.log(result);
})
.catch(function(err){
  console.log("Error:", err);
});