class Rectangle{
  constructor(length, width){
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
const rect = new Rectangle(5 ,3);// first object 
const rect1 = new Rectangle(10, 4);// second object
let rect2 = new Rectangle(10, 4);// third object
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect1.area());
console.log(rect1.perimeter());
console.log(rect2.area());
console.log(rect2.perimeter());