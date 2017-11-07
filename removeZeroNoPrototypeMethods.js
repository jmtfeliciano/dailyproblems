/* You are NOT allowed to use any temporary arrays or objects. 
You are also not allowed to use any Array.prototype or Object.prototype methods.

Prompt:  
Write a function that takes an array of values and moves all elements that are 
zero to the end of the array, otherwise preserving the order of the array. 
The zero elements must also maintain the order in which they occurred.
For example, the following array
[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
is transformed into
[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
Zero elements are defined by either 0 or "0". 
Some tests may include elements that are not number literals.
*/ 

function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  
  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  
  // the correctly sorted array should be returned.
 
  // only need to do from index 0 to index length - 2 
  
  // cant use .length 

  var numZeros = 0;

  for(var i=0; typeof(array[i]) !== 'undefined' ; i++){
   if(array[i] === 0 || array[i] === '0') {
      numZeros++;
   }
  }
  var arrayLength = i;

  var manualShift = function(zeroIndex){
    let temp = array[zeroIndex]; 
    for(let i = zeroIndex; i < arrayLength - 1; i++){
     array[i] = array[i+1]; 
    }
    array[arrayLength-1] = temp;
  }; 

  for(let i=0; i < arrayLength - numZeros; i++){
    if(array[i] === 0 || array[i] === "0"){
      manualShift(i--);
    }
  }

  return array;
}