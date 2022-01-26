function largestPairSum (numbers) {
    let res = numbers.sort(function(a, b){return b - a});
   
   return res[0] + res[1]
   }