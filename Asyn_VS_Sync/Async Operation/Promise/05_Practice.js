const fs = require('fs');
function fsReadFilePromisified(filename , encoding){
   return new Promise ((resolve, reject) => {
      fs.readFile(filename, encoding, (err, data) =>{
        if(err){
          reject(err);
        }else
        {
          resolve(data);
        }
      })
   })
}
function Callback(data){
  console.log(data);
}
function Callbackerror(err){
  console.log(err);
}
fsReadFilePromisified('a.txt', 'utf-8')
.then(Callback)

.catch(Callbackerror);

const p = new Promise((resolve, reject)  => resolve);
console.log(p);

const p1 = new fs.readFileUsingPromise('a.txt','utf-8');
console.log(p1);