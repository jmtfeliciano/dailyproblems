/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Example:
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers){

  let numbersArray = numbers.split(" ");
  
  numbersArray.forEach(function(value,index){
    numbersArray[index] = Number(numbersArray[index]);
  });
  
  numbersArray.sort(function(a, b){return b-a});
  
  return `${numbersArray[0]} ${numbersArray[numbersArray.length-1]}`;
  
}