/*
Walkthrough Sample:  
let mapExample = [[1,3,5],[2,0,10],[-3,1,4],[4,2,4],[1,1,5],[-3,0,12],[2,1,12],[-2,2,6]];

mapExample[0] -> [1,3,5]
1 represents the level shift of time dilation
3 represents the direction
5 represents the distance traveled relative to the current time dilation layer

Solomon's new location becomes [-10,0]

mapExample[1] -> [2,0,10]
At this point, Solomon has shifted 2 layers deeper.
He is now at time dilation layer 3.
Solomon moves North a Standard Distance of 80.
Solomon's new location becomes [-10,80]

mapExample[2] -> [-3,1,4]
At this point, Solomon has shifted out 3 layers.
He is now at time dilation layer 0.
Solomon moves East a Standard Distance of 4.
Solomon's new location becomes [-6,80]

Here are what the values of each subarray represent:
* Time Dilation: With each additional layer of time dilation entered, time slows by a factor of 2. At layer 0, time passes normally. At layer 1, time passes at half the rate of layer 0. At layer 2, time passes at half the rate of layer 1, and therefore one quarter the rate of layer 0.
* Directions are as follow: 0 = North, 1 = East, 2 = South, 3 = West
* Distance Traveled: This represents the distance traveled relative to the current time dilation layer. See below:

*/ 

function solomonsQuest(ar){

  let x = 0;
  let y = 0;
  let currDilation = 0;
  
  ar.forEach(function(val,index){
    let dilation = val[0]; 
    currDilation += dilation;
    let direction = val[1];
    let distance = val[2];
    let dilatedDistance = distance * (2**currDilation);
    
    direction === 0 ? y += dilatedDistance :
      direction === 1 ? x += dilatedDistance :
        direction === 2 ? y -=  dilatedDistance : x -=  dilatedDistance;

  });
  
  return [x,y];

}
