// const fs = require('fs');

function setTimeoutPromisified(delay){
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve();
      },delay);
    })
}
setTimeoutPromisified(3000)
.then(function(){
  console.log("Delayed By 3s");
})