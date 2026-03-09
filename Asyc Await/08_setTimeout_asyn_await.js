const fs = require('fs');

function setTimeoutdelay(delay){
  return new Promise((resolve) =>{
     setTimeout(function(){
      resolve();
     },delay);
  });
}
async function main(){
     await setTimeoutdelay(2000);
     console.log("2 seconds have passed.");
     await setTimeoutdelay(5000);
     console.log("5 seconds have passed");
}
main();
console.log("hi dear")
console.log("Hi Tejsavi")