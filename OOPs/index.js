//OOPS(Object-oriented programming)
//abstraction
//inheritance
//polymorphism
//Encapsulation

// factory function

let obj = {};
let obj2 = obj;
console.log(obj == obj2); // true

function userData(userName, age, password, address, organization) {
  let object = {};// first step create object  inside factory function
  object.userName = userName; // update object with arguments
  object.age = age;
  object.password = password;
  object.address = address;
  object.organization = organization;
  object.print = function (money) {
    console.log(
      `Name: ${this.userName}, Age: ${this.age}, Organization: ${this.organization} money: ${money}`
    );
  };
  return object; // 3rd part return object
}

let elonMusk = userData("elonMusk", 55, "password123", "123 Main St", "SpaceX");
console.log(elonMusk);
elonMusk.print("1000000000000");

let steveJobs = userData(
  "Steve Jobs",
  54,
  "password456",
  "456 Elm St",
  "Apple"
);
steveJobs.print("1200000000000");
