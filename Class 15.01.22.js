// Find Factorial Number

function factorial(a){
  
    let s = 1
    
    for(let i = a; i >= 1;i--){
      
      s = s *i  
    }
     return s
   
  }
  
  console.log(factorial(5))
  
  // 5*4*3*2*1
  
  
  
  // Check a Number Positive or Negative
  
  function res(a){
    
    let x = (a < 0 ) ? "Negative" : "Positive"
    
    return x
    
  }
  
  console.log(res(190))
  
  // Raf
  
  // let a = -1;
  // let sam = (a > 0) ? (a == 0 ? "zero" : "positive") : "negative";
  // console.log(sam);
  
  // function number(a){
  //   var x=(a>0) ? "positive":"Nagative"
  //   return x;
  // }
  // var result=number(10)
  // console.log(result)
  
  
  // function number(a){
  //   var x=(a>0) ? "positive":"Nagative"
  //   console.log(x)
  // }
  // var result=number(-10)