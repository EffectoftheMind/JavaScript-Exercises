function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var a_len = word1.length;
  var b_len = word2.length;
  var c_len = word3.length;
  
  if(a_len < b_len && c_len){
    return(a_len)
  }
  else if(b_len < c_len && a_len){
    return(b_len)
  }
  else if(c_len < a_len && b_len){
    return(c_len)
  }
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);
