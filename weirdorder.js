/*
Your task is to sort a given string. Each word in the String will contain a single number. 
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. 
The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

EXAMPLE:  
Test.assertEquals(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
Test.assertEquals(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
*/

function order(words){
  if(!words){
    return '';
  }

 words = words.split(' ');

 let wordArray = [];

 let findNumber = function(val){
    for(let i=0; i < val.length; i++){
      if(Number(val[i])){
        return Number(val[i]);
      }
    }
  };  
  
  words.forEach(function(val,i){
    wordArray.push([findNumber(val), val]);      
  });
  
  wordArray.sort(function(a,b){
    return a[0] - b[0]; 
  });

  
  let stringified = wordArray.reduce((acc,val) => {return acc+' '+val[1];}, '');

  return stringified.slice(1,stringified.length);
  

}
