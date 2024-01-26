let p;
function promise(dataId) {
  console.log("Fetching data.....");
  // Promise creation
  p = new Promise((resolve, reject) => {
    setTimeout(() => {

      console.log("promise is done " + dataId);
      resolve("Success");
    }, 5000)

  })
  return p;

}
// async function compulsarily always return a promise 
// async function hello() {
//   console.log("Hello");
// }
// hello().then((res) => {
//   console.log(res);
// })

// Using multiple handlers
// promise().then((res) => {
//   console.log(res);
//   console.log("successful");
//   promise().then((val) => {
//     console.log(val);
//   })
// })
// promise().catch((err) => {
//   console.log(err)
// })


// Using async function
// await key word only used in a async function

// "await" keyword is used to pause the execution of its surrounding async function until the promise is settled.

// async function always return an Promise

// async function asynchronousfx() {
//   await promise(2);
//   console.log(p);
//   await promise(3);
//   console.log(p);
//   await promise(4);
//   console.log(p);
// }

// Using IIFE we can call a function automatically
(async function () {
  await promise(2);
  console.log(p);
  await promise(3);
  console.log(p);
  await promise(4);
  console.log(p);
})();


// asynchronousfx();