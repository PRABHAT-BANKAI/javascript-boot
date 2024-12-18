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

// function sum(a, b) {
//   return a + b;
// }

// function calculate(a, b, callback) {
//   console.log(callback(a, b));
// }

// calculate(5, 10, sum);



let dataOfNumber = [24,655,79,82,7,12,75,74,90,17,8]
let string2 = "javascript"

// dataOfNumber.splice(3,4,"hello" ,"javscript")// first argument for starting index, second argument for how many remove elements in array 
console.log(dataOfNumber)


const storeSlice = dataOfNumber.slice(4,7)// first argument for starting point and  second argument  for end point 
const stringSlice = string2.slice(0,4)
console.log(storeSlice)
console.log(stringSlice)



let dataOfUser = ["john","batman","superman","aquaman"]
// first map create new array internally
// second update element in new array
// third return new array

// high order function 
const storeCharacterData = dataOfUser.map((element)=>{
  return element+ " " +"DC comics"
})

console.log(storeCharacterData)


let numbersData = [12,14,15,17,18,19,20,21,22,23,24,25]


const storeNumbers = numbersData.filter((element)=>{
  return element > 20
})

console.log(storeNumbers)

let sum = 0
const storeForEach=  numbersData.forEach((element)=>{
  console.log(element)
  sum += element
})
console.log(sum)
console.log(storeForEach)



const newValue = numbersData.indexOf(24)
console.log(newValue)

const findIndex = numbersData.findIndex((element)=>element>24)

console.log(findIndex)


let techStack =  ["react","node","html","css","mongodb","vercel","netlify","javascript"]   //["node","node","node","css"]

const resultStack = techStack.includes("css")

console.log(resultStack)


const storeEvery = techStack.every((element)=>{
 return element == "node"
})
console.log(storeEvery)

const storeSome = techStack.some((element)=>{
  return element == "javascript"
 })
 console.log(storeSome,"some")




 let reduceData = [10,20,30,40,[1,2,3,[6,15,[1,2,33]]]]


 const storeReduceData = reduceData.reduce((acc,element)=>{

if(typeof element == "number"){
  acc = [...acc, element]
}else{
   acc = [...acc,...element,]
}

 return acc
 },[])


 console.log(storeReduceData,"flat")//reduce is not working for flat the array directly