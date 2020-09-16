function acronymMaker(str){
  var acro = "";
  var arr = str.split(' ');
  
  for(i = 0; i < arr.length; i++){
    acro += arr[i].substr(0,1);   //note to self: substr extracts char in given range
  }
  console.log(acro);
}

output = acronymMaker("Portable Network Graphics");
console.log(output);
