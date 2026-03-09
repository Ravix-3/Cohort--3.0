function sum(a,b){
  if(a<0 || b<0){
    console.log("Negative numbers are not allowed.");
  }
  return a + b;
}
try{
  console.log(sum(-2,3));
}
catch(e){
  console.log(e);
}