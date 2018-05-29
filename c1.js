function cToF(celsius) {
  // this is celsius to Fahrenheit
  var fahrenheit = (celsius * 1.8) + 32;
  console.log(celsius + '\xB0' + 'C', "is", fahrenheit + '\xB0' + 'F');
}

function fToC(fahrenheit) {
  // this is Fahrenheit to Celsius
  var celsius = (fahrenheit - 32) * (5/9);
  console.log(fahrenheit + '\xB0' + 'F', "is", celsius + '\xB0' + 'C');
}

cToF(60);
fToC(45);
