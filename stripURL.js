/*
Complete the method so that it does the following:

Removes any duplicate query string parameters from the url
Removes any query string parameters specified within the 2nd argument (optional array)
stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
*/

function stripUrlParams(url, paramsToStrip){
  var urlCopy = url.slice();
  var queryStart = url.indexOf('?');
  if(queryStart === -1){
    return url;
  }
  var homeLink = url.slice(0,queryStart+1);
  var parameters = url.slice(queryStart+1, url.length);
  var parameterArray = parameters.split('&');

  var parMap = new Map();
  
  for(var i=0; i<parameterArray.length; i++){
    parameterArray[i] = parameterArray[i].split('=');
    parMap.set(parameterArray[i][0], parameterArray[i][1]);
  }

  if(paramsToStrip){
    paramsToStrip.forEach(function(value){
      parMap.delete(value);
    });
  } 

  var currentKey = 0;
  for (var [key, value] of parMap) {
    homeLink = homeLink+key+'='+value;
    currentKey++;
    if(currentKey < parMap.size){
      homeLink += '&';
    }
  }

  return homeLink;
}