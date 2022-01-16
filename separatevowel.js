let str = "Hello World Bangladesh"

let arr = str.split("")


for(let i = 0; i <= arr.length-1; i++){
  
  if(arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u"){
    console.log(arr[i])
  }
  
}