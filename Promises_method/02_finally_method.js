const { time } = require("node:console");

let p = new Promise((resolve) =>{
   setTimeout(() => {
       resolve("Delayed Promised Resolved");
   } ,2000);
});
p.then( (data) => {
   console.log(data);
})
p.finally( () => {
   console.log("Promise operation completed");
});


function Timedelay(delay){
  return new Promise((resolve) => {
       setTimeout( (delay) => {
           resolve("Delayed Promise for 3s.");
       }, delay);
  });
}
Timedelay(3000)
.then( (result)=>{
     console.log(result);
})
.finally(() =>{
    console.log("Promise operation finished.");
});