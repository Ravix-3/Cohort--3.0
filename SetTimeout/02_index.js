function run(){
  console.log("This function after delayed of 2s");
}
setTimeout(run, 2000);

console.log("Settimeout is the asynchronous function, it will not block the execution of the code.");