
// It is the solution of callback hell

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("I have done after 2s");
    resolve(56);
  }, 2000);
})
p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 2000)
  })
  return p2;   // p1 promise will return p2;
}).then((value) => {
  console.log(value);
  return 2;   // p2 promise return value 2
}).then((val) => {
  console.log(val);
})



