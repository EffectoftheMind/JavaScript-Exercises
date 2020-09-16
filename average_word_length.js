function computeAverageLengthOfWords(word1, word2) {
  // your code here
  var wordcount1 = word1.length;
  var wordcount2 = word2.length;
  var solution = (wordcount1 + wordcount2) / 2;
  return(Math.round(solution));
  }
  
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output);
