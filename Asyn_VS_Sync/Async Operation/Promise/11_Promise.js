let p = new Promise((resolve) =>{
  resolve(1);
  resolve(2);
  resolve(3);
})
p.then((data) => {
  console.log("Promise Resolved " + data);
})