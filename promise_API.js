// Promise 1:
let p1 = new Promise((reject, resolve) => {
  setTimeout(() => {
    console.log("Value 1");
    resolve(1);
  }, 1000);
})
// Promise 2:
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("value 2");
    resolve(2);
  }, 2000)
})
// Promise 3:
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Value 3");
    resolve(3);
  }, 3000);
})

let Promise_all1 = Promise.all([p1, p2, p3]); // return all result at a time. but if error then no output
let Promise_all2 = Promise.allSettled([p1, p2, p3]) //Same as above but if error then also it gives output

let Promise_all3 = Promise.race([p1, p2, p3])  // return all result at a time based on their execution time. but if error then no output
let Promise_all4 = Promise.any([p1, p2, p3])  // return all result at a time based on their execution time. but if error it gives output

let Promise_all5 = Promise.resolve(6);

let Promise_all6 = Promise.reject(new Error("Error"));


Promise_all1.then((value) => {
  console.log(value);
})