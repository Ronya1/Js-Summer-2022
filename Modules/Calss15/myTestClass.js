class myTestClass { 
// THE BELOW FUNCTION SHOULD BE EXECUTED THROUGH examWorkin.js in Class 15 
 /**
 * Create a function to return an array 
 *  after removing given number from the given array
 * 
 * 
 * 
 * [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
 * 
 * [21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65]
 * 
 * [-1, 2, 43, 65] , 11 -> [-1, 2, 43, 65]
 */

 toRemoveAndReturn(listOfNum, numToRemove){
   let resultArray = [];
   for (let i=0 ; i <= listOfNum.length-1; i++) {
      if (listOfNum[i] !== numToRemove) {
         resultArray.push(listOfNum[i])
      }
   } 
   console.log(resultArray);
   };
 
 
 /**
  * Create a function to return the missing smallest positive number in given array
  * 
  * 
  * [1, 2, 3, 4, 5]   ->   6
  * 
  * [2, 3, 1, 56, 23, 11]  ->   4
  * 
  * [-1, 0, 2, 1]    ->  3
  * 
  * [1, 1, 2, 4, 3, 6, 4, 7, 9] ->   5
  * 
  * 
  */

smallestNum(listofnums2){ 
   let compNume = 1;
   let resultArray = listofnums2.sort() 
   for (let i = 0; i < resultArray.length-1; i++){
      if (resultArray[i] > 0) {
      if (resultArray[i] == compNume) {
         compNume++
      } else {
         console.log(compNume)
        break;
      }
   }
   }
}



 /**
  * Create a function to return the points to be marked against for over speeding.
  * 
  * For every 5mph over the speed limit, 1 point should be marked
  * 
  * function will:
  *      take userSpeed and speedLimit as input
  *      return the number of points should be marked against the license.
  * 
  * 
  * 
  * sl= 60 , us = 70 -> points = 2
  * 
  * sl = 60 , us = 63 -> points = 0
  * 
  * sl = 75 , us = 70 -> points = 0
  * 
  * sl = 80 , us = 88 -> points = 1
  */

 
 licensePoints(userSpeed,speedLimit) {
   let onePoint = 5
   let calculation = (userSpeed-speedLimit) / onePoint
   let points = 0
   if (userSpeed > speedLimit) {
      points = Math.floor(calculation)
   } 
   console.log(points)
 } 


} module.exports = myTestClass

