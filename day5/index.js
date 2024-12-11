let userEmail = "asdf@gmail.com";
let password = "12345";

if (userEmail === "asdf@gmail.com" && password === "12345") {
  console.log("Login successful!");
} else {
  console.log("invalid credentials");
}

let light = "yellow";
switch (light) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Slow down");
    break;

  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}


let a = 1

console.log(a)
console.log(++a) //prefix
console.log(a++)// postfix
console.log(a)
