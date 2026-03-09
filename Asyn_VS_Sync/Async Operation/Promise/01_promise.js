// Creating the promisified version of fs.readFile
const fs = require("fs");


function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
function callbackData(data){
  console.log("Data from file is :", data);
}
function callbackError(err){
  console.log("Error is ", err);
}

fsReadFilePromisified("file.txt", "utf-8")
.then(callbackData)
.catch(callbackError);