class user {
  constructor (name, age, city , state){
    this.name = name ;
    this.age = age;
    this.city = city;
    this.state = state;
  }
  static print(){
    console.log("This is the name of the employee working in the company");
  }
  past_experince(){
    console.log("This is the past experience of the employee");
  }
}
user.print();

let user1 = new user("ravi", 24 ,"Delhi")
user1.past_experince();