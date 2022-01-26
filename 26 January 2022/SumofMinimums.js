function sumOfMinimums(arr) {
    let sum = 0
    
    for(let i = 0; i <= arr.length-1; i++){
      
      let x =  arr[i]
      
      let a = x.sort(function(a, b){return a - b});
      
       let b = a.shift();
      
      sum += b
       
     }
    
    return sum
    }
    
    console.log(sumOfMinimums([[7, 9, 8, 6, 3], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))
    