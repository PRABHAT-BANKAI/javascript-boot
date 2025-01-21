function employee() {
  let object = {
    name: "John",
    age: 30,
    job: "Developer",
  };
  object.game = "pubg";

  object.show = function () {
    let object = {
      sports: "sports",
    };

    object.speak = ()=> {
      console.log(this);
    };
    return object;
  };

  return object;
}

const user = employee();
// console.log(user)
const result = user.show();

result.speak();
