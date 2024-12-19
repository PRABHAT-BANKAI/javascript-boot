let object = {
  name: "John Doe",
  age: 30,

}
Object.freeze(object)

object.age= 50

console.log(object)