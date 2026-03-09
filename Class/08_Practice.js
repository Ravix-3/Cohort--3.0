// creating a parent class named shape
class Shape{
  constructor(color){
    this.color = color;
  }
  paint(){
    console.log(`paint this rectangle with ${this.color}`);
  }
  static metadata(){
    console.log("This is a parent class for all shapes");
  }
}
// creating a class named Rectangle
class Rectangle extends Shape{
  constructor(length, width, color)
  {
    super(color);
    this.length = length;
    this.width = width;
    
  }
  area(){
    return this.length * this.width;
  }
  perimeter(){
    return 2 * (this.length + this.width);
    }
}

// creating the class named Square
class Square extends Shape{
  constructor(side ,color){
    super(color);
    this.side = side;
  }
  area(){
    return this.side * this.side;
  }
  perimeter(){
    return 4 * this.side;
  }
}
// creating the instance of the class Rectangle
let rect = new Rectangle(5, 3, "red");
console.log(rect);
console.log(rect.area());

// creating the instance of the class Square
let sqr = new Square(4, "blue");
console.log(sqr);
console.log(sqr.area());

console.log(Shape.metadata());
