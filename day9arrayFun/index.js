// Understanding Array
// Array Functions
// Push ,Pop, shift, upshifts, Splice, map ,filter, foreach, indexof, findindex ,includes, every, some,reduce
// Understanding String
// String Function
// substr, substring, join, trim

let array = [1, 2, 3, 4, 5];

let array2 = [45, 65, 7, 6, 7, 6, ...array]; //spread operator  []   [1, 2, 3, 4, 5]== > [1,2,3,4,5] // Rest operator
// console.log(...array)
console.log(array2);
console.log(array == array2);

function show(a, b, ...num) {
  // rest operator
  console.log(a);
  console.log(b);
  console.log(num);
}
show(1, 2, 3, 4, 5);

let store = [1, 2];

let result = store;
store.push("55");
const getFromStore = store.push("hi from push");
let result2 = store;
console.log(store);
console.log(result === result2);
console.log(getFromStore);
const getFromPop = store.pop();
console.log(store);
console.log(getFromPop);
// console.log([1,2,3]=="1,2,3")

let arr = [1, 2, 3, 4, 5, 6, 0, 7];

arr.unshift("staring ");

console.log(arr);

arr.shift();

console.log(arr);

// let string = "java"
// for(let i=0;i<string.length;i++){
//  string[i]= 23
// }
// console.log(string)

function sum(a, b) {
  return a + b;
}

function calculate(a, b, callback) {
  console.log(callback(a, b));
}

calculate(5, 10, sum);
