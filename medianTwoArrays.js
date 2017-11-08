/*

Leet Code Difficulty:  Hard

There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two SORTED arrays. 
If possible, make the overall run time complexity to be O(log (m+n)).
If you can't implement log(m+n), specify your o number*/

var findMedianSortedArrays = function(nums1, nums2) {
  let totalLength = nums1.length + nums2.length;
  let isEven = totalLength % 2 === 0;
  //[10,11,12], want to stop at index 1.  Math.floor(len/2)
  //[10,11,12,13], want to stop at index 2.  len/2
  //decision:  
  let tempStorage = [];

  //benefit of working backward:  can use pop() with is O(1) operation
  for(var i=totalLength-1; totalLength/2 - 1 <= i; i--){
    //if length 5, stops at index 2
    //if length 4, stops at index 1
    
    if(nums1.length > 0 && nums2.length > 0){
      if(nums1[nums1.length-1] >= nums2[nums2.length-1]){
        tempStorage.push(nums1.pop());
      }else{
        tempStorage.push(nums2.pop());
      }
    }else if(nums1.length === 0){
      tempStorage.push(nums2.pop());
    }else if(nums2.length ===0){
      tempStorage.push(nums1.pop());
    }

  }

  if(isEven){
    return (tempStorage[tempStorage.length-2]+tempStorage[tempStorage.length-1])/2;
  }else{
    return tempStorage[tempStorage.length-1];
  }
  
};