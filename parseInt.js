/* we want to convert a string into an integer. The strings simply represent the numbers in words.
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919

Extra guidelines:  
- The minimum number is "zero" (inclusively)
- The maximum number, which must be supported is 1 million (inclusively)
- The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
- Assume all tested numbers are valid, you don't need to validate them
*/
function parseInt(string) {
  let str = string.slice();
  if (str === 'zero'){
    return 0; 
  }
  
  //remove 'and', join them, then split
  str = str.split(' and ');
  str = str.join(' ');
  str = str.split(' ');
  
  let currentSum = 0;
  let numbers = {};
  numbers['one'] = 1, numbers['two'] = 2, numbers['three'] = 3,
  numbers['four'] = 4, numbers['five'] = 5,  numbers['six'] = 6,
  numbers['seven'] = 7, numbers['eight'] = 8,  numbers['nine'] = 9, 
  numbers['eleven'] = 11, numbers['twelve'] = 12,
  numbers['thirteen'] = 13, numbers['fourteen'] = 14,  numbers['fifteen'] = 15,
  numbers['sixteen']  = 16, numbers['seventeen'] = 17,  numbers['eighteen'] = 18,
  numbers['nineteen']  = 19,
  numbers['twenty'] = 20 , numbers['thirty'] = 30,  numbers['forty'] = 40,
  numbers['fifty'] = 50 , numbers['sixty'] = 60,  numbers['seventy'] = 70,
  numbers['eighty'] = 80 , numbers['ninety'] = 90
  
  numbers['hundred'] = 100;
  numbers['thousand'] = 1000;
  numbers['million'] = 1000000;

  
  if(str.indexOf('million') !== -1){
    return numbers['million'];
  }

  if(str.indexOf('thousand') !== -1){
    let localSum = 0;
    let thouIndex = str.indexOf('thousand');
    let thouArray = str.splice(0,thouIndex+1); 
    thouArray.pop();
    
    if(thouArray.indexOf('hundred') !== -1){
      localSum = numbers[thouArray[0]] * 100;
      thouArray.splice(0,2);
    }

    if(thouArray.length !== 0){
      //we have two cases

      // case 1:  0-19,20,30,..90
      if(numbers[thouArray[0]]){
        localSum += numbers[thouArray[0]];
      }else{  // case 2: 21,22,..29,..91,...99
        let dashedNumber = thouArray[0].split('-');
        localSum +=  numbers[dashedNumber[0]];
        localSum +=  numbers[dashedNumber[1]];
      }  
    }
    

    currentSum = localSum * 1000; 
    
  }
  
  if(str.indexOf('hundred') !== -1){
    let hundredIndex = str.indexOf('hundred');
    let hundredArray = str.splice(0,hundredIndex+1);
    currentSum += numbers[hundredArray[0]] * 100;
  }
  if(str.length !== 0){
    if(numbers[str[0]]){
        console.log(numbers[str[0]]);
        currentSum += numbers[str[0]];
      }else{  // case 2: 21,22,..29,..91,...99
        let dashedNumber = str[0].split('-');
        currentSum +=  numbers[dashedNumber[0]];
        currentSum +=  numbers[dashedNumber[1]];
     }  
  }
  
  //console.log(currentSum);
  return currentSum;
}