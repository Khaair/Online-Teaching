let str = "How can mirrors be real if our eyes aren't real"

let arr = str.split(" ")

let res = []

for(let i = 0; i <= arr.length-1; i++){
  let a = arr[i].split("")
  
  let b = a.shift();
  
  let c = b.toUpperCase();
  
  let d = a.unshift(c)

  let e =a.join("")

  let x = res.push(e)
}

let res2 = res.join(" ")

console.log(res2)

