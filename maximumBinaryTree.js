/*
Leetcode Medium problem prompt:

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.
Def of tree:  function TreeNode(val) {
                this.val = val;
                this.left = this.right = null;
              }
*/

var constructMaximumBinaryTree = function(nums) {
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  function findMaxIndex(currentArray){
    let highestIndex, highestValue;
    currentArray.forEach(function(val,i){
      if(!highestIndex){
        highestValue=val;
        highestIndex = i;
        return;
      }else if(highestValue < val){
        highestValue=val;
        highestIndex = i;
      }
    });
    return highestIndex;
  }
  
  function nodeSplitter(arr){
    if(arr.length===0){
      return null;
    }else{
      let toCutIndex = findMaxIndex(arr);
      let nodeValue = arr[toCutIndex];
      let leftSide = arr.slice(0,toCutIndex);
      let rightSide = arr.slice(toCutIndex+1);
      let node = new TreeNode(nodeValue);
      if(leftSide.length > 0){
        node.left = nodeSplitter(leftSide);
      }
      if(rightSide.length > 0){
        node.right = nodeSplitter(rightSide);
      }
      return node;
      
    }
  }
  
  return nodeSplitter(nums);
};

/*
The JSON.stringify([3,2,1,6,0,5]) of results should result: 
{"val":6,"right":{"val":5,"right":null,"left":{"val":0,"right":null,"left":null}},"left":{"val":2,"right":{"val":1,"right":null,"left":null},"left":{"val":3,"right":null,"left":null}}}
*/
