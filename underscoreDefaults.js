/*
Rewrite defaults from underscore library
Should not copy if keys already exist
*/

function underscoreDefaults(obj){

  let objects = Array.prototype.slice.call(arguments,1);
  let combinedObject = obj;

  //let falseys = [false, 0, -0, "", '', null, undefined, NaN,];

  for(let i=0; i < objects.length; i++){
    for(let key in objects[i]){
      if(combinedObject[key] === undefined){
        combinedObject[key] = objects[i][key]; 
      }
    }
  }
  
  return combinedObject;
}