// Understanding Functions
// Parameters Function (with Arguments)
// return type in Function

// function show() {
//   console.log("Hello World");
// }

// // Calling the function
// show();

// let a = 15;
// let b = 5;

// function adding(num1, num2) {
//   // parameters
//   console.log(a + b, `  a= ${num1} and  b=${num2}`);

//   // by default function  return undefined value
// }

// adding(a, b); // arguments

// console.log(adding(a, b));

let x = 15;
let y = 10;
const store = sub(x, y);

function sub(num1, num2) { //normal function 
  console.log("before return");
  return num1 - num2;
  // console.log("after return");
}



console.log(store);
let i = 1;

for (i; i < 10; i++) {
  if (i == 5) {
    //  break;
    continue;
  }
  console.log(i);
}

console.log(111 + +"12345");

// function recursion(a) {
//   if (a == 0) {
//     return;
//   } else {
//     console.log(a);
//     recursion(a - 1);
//   }
// }

// recursion(5);
