// contructor function

function UserData(userName, age, password, address, organization) {
  // name start with capital letter
  // 'this' keyword is used to bind the properties of the object to the UserData object.// bydefault create object
  this.userName = userName;
  this.age = age;
  this.password = password;
  this.address = address;
  this.organization = organization;
  // this.print = function (){
  //   console.log(`Name: ${this.userName}, Age: ${this.age}, Organization: ${this.organization}`);
  // }
}

UserData.prototype.print = function () {

  return  `Name: ${this.userName}, Age: ${this.age}, Organization: ${this.organization}`

};

let elonmusk = new UserData(
  "elonMusk",
  55,
  "password123",
  "123 Main St",
  "SpaceX"
);

let steveJobs = new UserData(
  "Steve Jobs",
  54,
  "password456",
  "456 Elm St",
  "Apple"
);

console.log(elonmusk.print());

console.log(steveJobs);

console.log(elonmusk.print == steveJobs.print);
