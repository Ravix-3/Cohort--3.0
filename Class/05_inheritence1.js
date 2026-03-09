// Base Class
class Shape {
  constructor(color,depth){
    this.color = color;
    this.depth = depth;
   }
   paint(){
    console.log(`The color of the rectangle is ${this.color}`);
  }
  volume(){
    return this.area() * this.depth;
  }
}
// Derived Classes - 1
class Rectangle extends Shape {
  constructor(width, height, depth ,color){
    super(color,depth);
    this.width = width;
    this.height = height;
  }
  area(){
    return this.width * this.height;
  }
  
  perimeter(){
    return 2 * (this.width + this.height);
  }  
}
// Derived Classes - 2
class square extends Shape{
  constructor(side, depth ,color){
    super(color,depth);
    this.side = side;
  }
  area(){
    return this.side * this.side;
  }
  perimeter(){
    return 4 * this.side;
  }
}
class Circle extends Shape{
  constructor(radius,depth, color){
    super(color,depth);
    this.radius = radius;
  }
   area(){
    return 3.14 * this.radius * this.radius;
  }
   perimeter(){
    return 2 * 3.14 * this.radius;
  }
}

let rect = new Rectangle(4,6,3,"red");
console.log(`Area of rectangle: ${rect.area()}`);
console.log(rect.volume());