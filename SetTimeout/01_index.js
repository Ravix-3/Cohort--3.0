setTimeout(() => {
  console.log("This message is displayed after a delay of 2 seconds.");
}, 2000);

// logic: Sum of first 10000 natural numbers
let sum = 0;
for(let i = 1; i <= 10000; i++) {
  sum += i ;
}
console.log("The sum of first 10000 natural numbers is: " + sum);


setTimeout(() => {
  console.log("NIL");
},3000);

console.log("This message is displayed immediately.");