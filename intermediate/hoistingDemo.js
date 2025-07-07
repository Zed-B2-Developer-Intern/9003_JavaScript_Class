console.log(x); // undefined because of hoisting
var x = "Hello Hoisting!";

hoistedFunction();

function hoistedFunction() {
  console.log("This function is hoisted.");
}
