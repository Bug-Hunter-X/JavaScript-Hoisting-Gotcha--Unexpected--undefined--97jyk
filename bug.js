function myFunc() {
  console.log(a);
  var a = 1;
}
myFunc(); // Outputs undefined, not an error, but unexpected behavior