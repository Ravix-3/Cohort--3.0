// This is the second practice file for student class.

// creating a blueprint for the student class
class Student{
  constructor(name, marks){
    this.name = name;
    this.marks= marks;
  }
  calculateGrade(){
    if(this.marks >= 90){
      return "A";
    }
    else if(this.marks >= 80){
      return "B";
    }else if(this.marks >= 70){
      return "C";
    }else if(this.marks >= 60){
      return "D";
    }else if(this.marks >= 50){
      return "E";
    }else if(this.marks >= 40){
      return "F";
    } 
    else{
      return "FAIL"
    } 
  }
}
// creating an instance of the student class
let student1 = new Student("Ravi", 85);
console.log(student1);
console.log(student1.calculateGrade());

let student2 = new Student("Vijay", 78);
console.log(student2);
console.log(student2.calculateGrade());

let student3 = new Student("sita", 98);
console.log(student3);
console.log(student3.calculateGrade());