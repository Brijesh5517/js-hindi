// (function chai(){
//     console.log("brijesh") //brijesh
// })();

// (()=>{
//     console.log("Hello")
// } )()
// let currentScore = 100

// ;(function() {
//     console.log("Starting game...");
// })()

 function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2