var flip_input = prompt("How many times would you like to flip the coin?", "Enter a Number");
var coin_face = ["Heads", "Tails"];
var count_heads = 0;
var count_tails = 0;

function FlipCoin(num){
  for(i = 0; i < num; i++){
    var coinDecide = Math.floor(Math.random() * 2);
    if(coinDecide == 0){
      count_heads += 1;
    }
    else{
      count_tails += 1;
    }
  }
}
FlipCoin(flip_input);

console.log("Total coin flips:");
console.log("=================");
console.log("Heads", count_heads);
console.log("Tails", count_tails);
