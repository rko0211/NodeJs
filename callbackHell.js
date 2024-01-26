// In callback hell a callback function is used in the function

// If parenthesis is used with a function name then it will execute immediatly

// As this function contains setTimeout() method so it becomes asynchronous function

// In javascript asynchronous function execute parallaly with other codes

function asyncfunction(dataID) {
  setTimeout(() => {
    console.log("Data " + dataID);
  }, 2000);

}

// In the bellow all 3 function will execute parallaly
asyncfunction(1);
asyncfunction(2);
asyncfunction(3);

// Now we want to make all function call will be executed afeter a certain time.
function showdata(dataId, nextdata) {

  setTimeout(() => {
    console.log("Now using call back function");
    console.log("data " + dataId);
    nextdata();
  }, 2000);
}
// showdata() function will execute immediately
// showdata(1, showdata(2, showdata(3)));


// This syntax is known as callback hell
showdata(1, () => {
  showdata(2, () => {
    showdata(3, () => {
      console.log("Fetch succesfull");

    });
  })
})




