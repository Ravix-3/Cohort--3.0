// Blueprint for creating objects
class Rectangle
{
  constructor( length , width , color){
    this.length = length;
    this.width = width;
    this.color = color;
  }
  area(){
       return this.length * this.width;
  }
  perimeter(){
    return 2 * (this.length + this.width);
  }
  paint(){
    console.log(`Color: ${this.color}`);
  }
}
// creating objects using class
const rect = new Rectangle(5 ,3, "red");// first object
const rect1 = new Rectangle(10, 4, "blue");// second object
let rect2 = new Rectangle(10, 4, "green");// third object

// consoling the  object 
console.log(rect);
console.log(rect1);
console.log(rect2 );

// calling the area method of the class
console.log(rect.area());
console.log(rect1.area());
console.log(rect2.area());

console.log(rect.perimeter());
console.log(rect1.perimeter());
console.log(rect2.perimeter());

rect.paint();
rect1.paint();
rect2.paint();