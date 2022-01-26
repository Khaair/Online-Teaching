

function getMiddle(s)
{
  let arr = s.split("")

if(arr.length % 2 == 1){
  let x = arr.length/2
  let y = Math.ceil(x)
  let z = arr[y-1]
  return z
}
if(arr.length % 2 == 0){
  let a = arr.length/2
  
  let c = arr[a-1]
  let d = arr[a]
  
  var res = c.concat(d);
  return res
}
}

console.log( getMiddle("testxjh"))



// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"