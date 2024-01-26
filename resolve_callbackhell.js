// Promise is the javascript object always return by async function
// Promise represent eventual completion of task
// Promise are used to get information one after another in synchronous manner

// Promise has 2 parts ---->  1. PromiseState: , 2. Promisevalue: 

function showdata(dataId, nextdata) {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now using call back function");
      console.log("data " + dataId);
      resolve("success");
      if (nextdata)
        nextdata();
    }, 5000);


  })

  return p1;
}
// different promise can execute parallaly
// showdata() function returns an promise;
// .then(), .catch() are the promise handlers this all are return an Promise

// This are Promise chain
showdata(12).then((res) => {
  console.log(res);
  return 13;
}).then((res) => {
  console.log(res);
})