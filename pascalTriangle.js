// task from codewar:
// pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]
// Write a function that, given a depth (n), 
// returns a single-dimensional array representing Pascal's Triangle to the n-th level.

function pascalsTriangle(n) {
  var array = [];

  if(n===1){
    return [1];
  }else if(n===2){
    return [1,1,1];
  }else if(n>2){
    array.push(1,1,1);
    var currentArray = [1,1];
    for(let level = 3; level <= n; level++){
      for(let index = 0; index < level; index++){
        if(index===0){
          array.push(1);
        }else if(index === level - 1 ){
         array.push(1);
        }else{
          array.push(currentArray[index-1] + currentArray[index]);
        }
      }
     currentArray = array.slice(-1*level);
      
    }
    return array;
  }
}
