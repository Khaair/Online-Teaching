function getEvenNumbers(numbersArray){
    
    return  numbersArray.filter(n => n % 2 == 0)
  }
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6,7,9,10]))