// for loop
let variable = "variable";
let count = 0;
for (let i = 1; i <= 4; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
    console.log(str);
    // count++
  }
}
// console.log(count)

//*
//**
//***
//****

//1
//2
//3
//4
//5
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// 1
// 12
// 123
// 1234

let number = 10;

while (number >= 0) {
  number--;
  console.log(number);
}
let value = 5;

do {
  value *= 5;
  console.log(value);

  // value = value * 5
} while (false);

let input = 24;

if (input % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

let input2 = 624;

if (input2 % 2 == 1) {
  console.log("odd");
} else {
  console.log("even");
}

let num = 1;

let countPrime = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    countPrime++;
  }
}

if (countPrime == 2) {
  console.log(`The ${num} is prime`);
} else {
  console.log(`The ${num} is not prime`);
}

44 % 2 == 0 ? console.log("even") : console.log("odd"); // ternary operator

45 % 2 == 0
  ? console.log("even")
  : 0 && 1
  ? console.log("false")
  : console.log("true");
