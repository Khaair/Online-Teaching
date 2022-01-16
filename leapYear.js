let year = 2005


if(year % 400 == 0 || year % 4 == 0){
  console.log(`${year} is leap year`)
}


else if(year % 100 == 0){
  console.log(`${year} is not a leap year`)
}

else{
   console.log(`${year} is not a leap year`)
}