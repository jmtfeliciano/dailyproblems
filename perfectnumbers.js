// the function checks whether or not the input is a perfect number
// for more info, check wiki of perfect number
// https://en.wikipedia.org/wiki/Perfect_number

var checkPerfectNumber = function(num) {
    var sumDivisor = 0;
    for(let i=1; i <= (num/2); i++ ){
        if(num/i === Math.floor(num/i)){
            sumDivisor += i;
        }
    }
    
    if(sumDivisor === num){
      return true;
    }else{
      return false;
    }
};

console.log(checkPerfectNumber(6)); 
// expect this to be true
console.log(checkPerfectNumber(7)); 
// expect this to be false

