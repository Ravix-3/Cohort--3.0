const fs = require("fs");

function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath , encoding, (err , data) => { 
          if (err)
          {
            reject(err);
          }
          else
            {
            resolve(data);
          }
        })
    });
}
function callbackData(data)
{
  console.log("Data is :" + data);
}
function callbackerror(err)
{
  console.log("Error is :" + err);
}
let p = fsReadFilePromisified("a.txt", "utf-8")
p.then(callbackData)
p.catch(callbackerror);