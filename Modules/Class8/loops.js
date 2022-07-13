/**
 * Loops:
 * 
 * Everything can be done with these 3 and the last 3 are jsut smarter ways to do this. 
 * for 
 * whole
 * do-while
 * 
 *  
 * for-of
 * for-in
 * forEach
 */
/**
 *  print "Hellow WOrld!" 20 times 
 */

console.log("Hellow WOrld!"); // 1      Counter <=20
console.log("Hellow WOrld!"); // 2      Counter <=20
console.log("Hellow WOrld!"); // 3      Counter <=20
console.log("Hellow WOrld!"); // 4      Counter <=20
console.log("Hellow WOrld!"); // 5      Counter <=20
console.log("Hellow WOrld!"); 
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!");
console.log("Hellow WOrld!"); // 20      Counter <=20
                              // 21     Counter <=20

/**
 * for
 *      
 * for (let counter = 1) {
 * for (Initilization  ; condition ; incremental) 
 *      for-loop 
 *      code block
 * }
 */

console.log(`\n\nfor-loop\n\n`);

for (let counter = 1 ; counter <= 20 ; counter++) {
    console.log("Hellow WOrld!");
}
/**
 * 1. create counter-variable with initial value 
 * 2. check if condition is true 
 * 3. if true, enter the for-loop and execute code ; if-false do not enter in for-loop and move further in code 
 * 4. once all for-loop code is executed, increment the counter-value
 * 5. check if condition is true 
 * 6. if true, enter the for-loop and execute code ; if-false do not enter in for-loop and move further in code 
 * 7. once all for-loop code is executed, increment the counter-value
 * 8. check if condition is true 
 * 9. if true, enter the for-loop and execute code ; if-false do not enter in for-loop and move further in code
 * 10. once all for-loop code is executed, increment the counter-value
 * 11. and so on ... 
 */


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

console.log(sports[0]);
console.log(sports[1]);
console.log(sports[2]);
console.log(sports[3]);
console.log(sports[4]);

// counter = 0 ;   counter <= lastindexOfArray (length-1) (sports.length-1)    ; counter++   

for (let counter = 0 ; counter <= sports.length-1 ; counter++) {
    console.log(sports[counter]);
}

/**
 * 1. create counter-variable with initial value 
 * 2. check if condition is true 
 * 3. if true, enter the for-loop and execute code ; if-false do not enter in for-loop and move further in code 
 * 4. once all for-loop code is executed, increment the counter-value
 * 5. check if condition is true 
 * 6. if true, enter the for-loop and execute code ; if-false do not enter in for-loop and move further in code 
 * 7. once all for-loop code is executed, increment the counter-value
 * 8. check if condition is true 
 * 9. if true, enter the for-loop and execute code ; if-false do not enter in for-loop and move further in code
 * 10. once all for-loop code is executed, increment the counter-value
 * 11. and so on ... 
 */


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

for (let counter = 0 ; counter = sports.length-1 ; counter+=2) {      // i=0,2,4,6,etc
    console.log(sports[counter]);
}



