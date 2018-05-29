function checkAge(name, age){
  // your code here
  if (age < 21) {
  console.log("Go home,", name);
  }
  if (age => 21){
  console.log("Welcome,", name);
  }
}

var output = checkAge('Adrian', 22);
console.log(output);
