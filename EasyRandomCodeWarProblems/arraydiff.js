/*
Your goal in this kata is to implement an difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b.

///// array_diff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

///// array_diff([1,2,2,2,3],[2]) == [1,3]

*/

function array_diff(a, b) {
  let c = [];

  for(let i=0; i < a.length; i++) {
    let isPresent = false;
    
    for(let j=0; j < b.length; j++){
      if(a[i]===b[j]){
        isPresent = true;
        j = b.length;
      }
    }

    if(isPresent === false){
      c.push(a[i]);
    }
  }

  return c;

}