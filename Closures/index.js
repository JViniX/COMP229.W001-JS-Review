// function outer() {
//     let msg = "ace of spades";
//     function inner() {
//         console.log(msg);
//     }
//     inner();
//     console.log("is my card");
// }
// // run the outer() function
// outer();
// logs "ace of spades"
// logs "is my card"
// ------------------------------------------
// function outer() {
//     let msg = "ace of spades";
//     function inner() {
//         console.log(msg);
//     }
//     return inner;
//     console.log("is my card");
// }
// let myClosure = outer(); // run the outer() function and store the returned inner() function.
// myClosure();
// // logs "ace of spades"

// ------------------------------------------
// function outer() {
//     let msg = "ace of spades";
//     function inner(msg) {
//         console.log(msg);
//     }
//     return inner;
//     console.log("is my card");
// }
// // run the outer() function
// let myClosure = outer();
// myClosure("My test");
// logs "My test"

// ------------------------------------------
function outer(msgP) {

   function inner(msg = (msgP ? msgP : "ace of spades")) {
      console.log(msg);
   }
   return inner;
   console.log("is my card");
}
// run the outer() function
let myClosure = outer("Outer text");
myClosure();
// logs "Outer text"
