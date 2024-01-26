// Solution of call back hell is promises. and promise is the promise of code execution

// Basicayy javascript is a synchronous programming language but in the presence of 
// asynchronous function JS becomes asynchronous in nature. 
// E.g :-

// Syntax given by browser
// let promise = new Promise(function (resolve, reject) {
//   // Promise is a object in javascript
//   alert("Hello");
//   resolve(56);
// })


// console.log("Hello World");
// setTimeout(() => {
//   console.log("Print after 2s")
// }, 2000);

// console.log("I am going to learn Javascript");

// alert("Hello world");
let p1 = new Promise((resolve, reject) => {
  console.log("Promise1 is pending");
  setTimeout(() => {
    console.log("I am a promised and i am fullfilled");
    // alert("I am promise and i am rejected");
    resolve(true);
    reject(new Error("I am an error"));
  }, 5000)
})
// console.log(p);

let p2 = new Promise((resolve, reject) => {
  console.log("Promise2 is pending");
  setTimeout(() => {
    // alert("I am promise and i am rejected");
    reject(new Error("I am an error"));
  }, 5000)
})
// This two promise will execute parallely 
console.log(p1, p2);
p1.then((value) => {
  console.log(value);
})

// p2.catch((error) => {
//   console.log("Some error occurs in P2");
//   console.log(error);
// })
p2.then((val) => {
  console.log(val);
}, (error) => {
  console.log(error);
})



