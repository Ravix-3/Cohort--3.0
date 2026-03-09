// Function Argument :  A function can be passed as an argument to another function. This is known as a callback function. It allows us to create more flexible and reusable code.
// Basic Calulator
function sum(a, b) {
   return a  + b;
}
function sub(a, b) {
   return a - b;
}
function mul(a, b) {  
  return a * b;
}
function div(a, b) {
   return a / b;
}
function mod(a ,b){
  return a % b;
}
// using function argument concept
function operation(a, b, fn) {
   return fn(a, b);
}

// Scientific Calculator
console.log(operation(10, 5, sum)); // 15
console.log(operation(10, 5, sub)); // 5
console.log(operation(10, 5, mul)); // 50
console.log(operation(10, 5, div)); // 2
console.log(operation(10, 5, mod)); // 0