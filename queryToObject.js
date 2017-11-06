/*
function:  convertQueryToMap(query)
output:  object
interesting problem?  yes, because needs to decode 'Light%20Blue' 
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
  
}


