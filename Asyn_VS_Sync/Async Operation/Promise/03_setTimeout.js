// with promise
function setTimeoutPromisifed(delay){
   return new Promise(resolve => setTimeout(resolve, delay));
}
setTimeoutPromisifed(5000).then( function(){
  console.log("5 seconds have passed");
   setTimeoutPromisifed(2000).then(function(){
     console.log("2 seconds have passed");
     setTimeoutPromisifed(3000).then(function(){
       console.log("3 seconds have passed");
     })
     setTimeoutPromisifed(1000).then(function(){
      console.log("1 seconds have passed");
     })
   })
});
// without Promise 
setTimeout(function(){
  console.log("5 seconds have passed");
   setTimeout(function(){
    console.log("4 second passed");
    setTimeout(function(){
      console.log("3 Second has passed");
      setTimeout(function(){
        console.log("2 seconds have passed");
        setTimeout(function(){
          console.log("1 second has passed");
        },1000);
      },2000);
    },3000);
   },4000);
},5000);