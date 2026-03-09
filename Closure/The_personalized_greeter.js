function personalizedGreeter(greeting){
    return function(name){
       console.log(greeting + ", " + name + "! ");
    }
}
let greetHello = personalizedGreeter("Nameste");
greetHello("Ravi");
greetHello("Ravi Singh Chauhan");