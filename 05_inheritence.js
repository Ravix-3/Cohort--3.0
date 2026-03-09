class Rectangle {
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area(){
    return this.width * this.height;
  }
  
  perimeter(){
    return 2 * (this.width + this.height);
  }

  printColor(){
    console.log(`The color of the rectangle is ${this.color}`);
  }
}
class square{
  constructor(side, color){
    this.side = side;
    this.color = color;
  }
  area(){
    return this.side * this.side;
  }
  perimeter(){
    return 4 * this.side;
  }
  printColor(){
    console.log(`The color of the square is ${this.color}`);
  }
}
class Circle {
  constructor(radius, color){
    this.radius = radius;
    this.color = color;
  }
  area(){
    return 3.14 * this.radius * this.radius;
  }
  perimeter(){
    return 2 * 3.14 * this.radius;
  }
  printColor(){
    console.log(`The color of the circle is ${this.color}`);
  }
}

let rect = new Rectangle(4, 5, 'red');
console.log(`Area of rectangle: ${rect.area()}`);
console.log(`Perimeter of rectangle: ${rect.perimeter()}`);
rect.printColor();

let square1 = new square(4, 'blue');
console.log(`Area of square: ${square1.area()}`);
console.log(`Perimeter of square: ${square1.perimeter()}`);
square1.printColor();

let circle = new Circle(3, 'green');
console.log(`Area of circle: ${circle.area()}`);
console.log(`Perimeter of circle: ${circle.perimeter()}`);
circle.printColor();