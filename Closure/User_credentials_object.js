const userCredentials  = {
  userName : "Ravi Singh Chauhan",
  gender : "Male",
  age: 22,
  fatherName : "Harishankar Prasad",
  motherName : "Devanti Devi",
  currentPassword: "Ravi@123",
  checkPassword : function(currentPassword1){
    return (currentPassword1 === "Ravi@123");
  }
}
console.log(userCredentials);
console.log(userCredentials.checkPassword(userCredentials.currentPassword));
