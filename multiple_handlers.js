// Promise handler

// When one promise handler dependent on other promise handler then it is known as Promise chaining
// Otherwise it is known as Promise multiple handler

// Create a promise

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise start after 2s");
    resolve(true);
  }, 2000);
  // resolve(true);   Here JS work as asynchronous in nature
})
// Multiple promise handler
p1.then((value) => {
  console.log("HOORAY!");
})
p1.then((value) => {
  console.log("Congratulations your promise has been rejected");
  // Promise Resuest 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("New promise request after 5s");
      resolve(5);
    }, 5000)

  })
}).then((value) => {
  console.log(value);
  return 2; // It will also return as new promise
}).then((value) => {
  console.log(value);
})
