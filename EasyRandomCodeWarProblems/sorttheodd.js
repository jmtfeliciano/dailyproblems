/*
Instructions from codewars:
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
e.g. sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
  // Return a sorted array.

  // Brute force solution
  let oddArray = [];
  for(let i=0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      oddArray.push(array[i]);
      array[i] = false;
    }
  }
  oddArray.sort(function(a,b){return a-b});

  let currentIndex = 0; // to keep track of where we at
  let currentOddIndex = 0;

  while(oddArray.length > currentOddIndex){
    while(array[currentIndex] !== false){
      currentIndex++;
    }
    array[currentIndex] = oddArray[currentOddIndex];
    currentOddIndex++;
  }

  return array;
  
}