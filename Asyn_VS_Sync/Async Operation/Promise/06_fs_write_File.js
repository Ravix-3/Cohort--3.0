const fs = require('fs');

function fswriteFilePromisified(filename,data){
  return new Promise(function(resolve,reject){
    fs.writeFile(filename, data, function(err){
      if(err){
        reject(err);
      }
      else{
       resolve(data.toUpperCase()); 
      }
    });
  });
}

fswriteFilePromisified("file.txt","hello ravi")
.then(function(result){
  console.log(result);
})
.catch( function(){
  console.log("Error while writing file");
})
