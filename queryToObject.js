/*
function:  convertQueryToMap(query)
output:  object
interesting problem?  yes, because needs to decode 'Light%20Blue' via decodeURIComponent();
*/

/*
Sample Input: 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
and expect convertQueryToMap(query) to return the following object:
{
  user': {
            'name': 
              {
                'firstname': 'Bob',
                'lastname': 'Smith'
              },
            'favoritecolor': 'Light Blue'        
  };
}
*/

function convertQueryToMap(query){ 

  let queryArray = query.split('&');
  let queryObject = {};

  if(!query){
    return queryObject;
  }

  queryArray.forEach(function(value, index){
    queryArray[index] = value.split('=');
    // does it contain a '.'?
    queryArray[index][0] = queryArray[index][0].split('.');
    let context = queryObject;
    for(let key=0; key < queryArray[index][0].length - 1; key++){
      if(!context[queryArray[index][0][key]]){
        context[queryArray[index][0][key]] = {};      
      }
      context = context[queryArray[index][0][key]];
    }
    
    context[queryArray[index][0][queryArray[index][0].length - 1]] = decodeURIComponent(queryArray[index][1]);
  
  });
  
  
  
  return queryObject;
  
}



