/*
Create a function named divisors/Divisors that takes an integer and 
returns an array with all of the integer's divisors(except for 1 and the number itself). 
If the number is prime return the string '(integer) is prime'
e.g.
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/


function divisors(integer) {
  let divisors = [];
  
  for(let i=2; i <= integer/2; i++){
    if(integer%i === 0){
      divisors.push(i);
    }
  }
  
  return divisors.length > 0 ? divisors : `${integer} is prime`;
  
}