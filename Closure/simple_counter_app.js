// Closure Feature
// https://www.notion.so/Closure-31ba349598f580eb917dfa49132aecf1

function Counter(){
  let count = 0;
  return (
    function(){
    count++;
    return count;
   }
);
}
let counter1 = Counter();
console.log(counter1());
console.log(counter1());