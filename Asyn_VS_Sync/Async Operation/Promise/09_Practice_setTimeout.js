function setTimeoutPromisified(delay){
    return new Promise(function(resolve){
       setTimeout(function(){
            resolve();
       },delay);
    })
}
setTimeoutPromisified(3000)
.then(function(){
  console.log("Delayed by 3s");
})