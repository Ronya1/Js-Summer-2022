// Exercise 1 
const sports = ['football', 'soccer', 'BASKETBALL', 'baseball', 'Rugby'];
/**
 * print all values of array in seperate line 
 * 
 * eg: 
 * footbacll
 * soccer
 * BASKETBALL
 * baseball
 * Rugby
 */

// counter = 0 ;   counter <= lastindexOfArray (length-1) (sports.length-1)    ; counter++   

for (let counter = 0 ; counter <= sports.length-1 ; counter++) {
    console.log(sports[counter]);
}

console.log(sports.length-1)

// EXERCISE 2
//const sports = ['football', 'soccer', 'BASKETBALL', 'baseball', 'Rugby'];
 /**
  * print values present on even-index
  * 
  * eg: 
  * footbacll
  * soccer
  * BASKETBALL
  * baseball
  * Rugby
  */
  console.log(sports[0]);
  console.log(sports[2]);
  console.log(sports[4]);

for (let counter = 0 ; counter <= sports.length-1 ; counter+=2) {      // i=0,2,4,6,etc
    console.log(sports[counter]);
}

for (let counter = 0 ; counter <= sports.length-1 ; counter+=2) {   // i=0,2,4,6,etc
       if(counter % 2 === 0) {
            console.log(sports[counter]);
       }
} 