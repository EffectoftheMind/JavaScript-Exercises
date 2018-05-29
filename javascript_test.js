// Question 1. Area and Perimeter
function ellipseArea(radius1, radius2){
  var radius_total = radius1 * radius2;
  return(radius_total * 3.14);
}

function ellipsePerimeter(radius1, radius2){
  var radius1_square = radius1 * radius1;
  var radius2_square = radius2 * radius2;
  
  var radius_sum = radius1_square + radius2_square;
  var sum_divide = radius_sum / 2;
  var squared_sums = Math.sqrt(sum_divide);
  
  var double_pi = 2 * 3.14;
  return(double_pi * squared_sums);
}

console.log(ellipseArea(5,10));
console.log(ellipsePerimeter(5,10));

// Question 2. Filtering odd length words
function filterOddLengthWords(array){
  var odd_words = [];
  for(var x = 0; x < array.length; x++){
    if(array[x].length % 2 !== 0){
      odd_words.push(array[x]);
    }
  }
  return(odd_words);
}



var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output);
