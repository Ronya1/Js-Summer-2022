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

for (let counter = 0 ; counter <= sports.length-1 ; counter+=2) {      // i=0,2,4,6,etc
    console.log(sports[counter]);
}

for (let counter = 0 ; counter <= sports.length-1 ; counter+=2) {   // i=0,2,4,6,etc
       if(counter % 2 === 0) {
            console.log(sports[counter]);
       }
} 

/**
 * Create abbreviation for any sentence
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY' ->  'YLO'
 * 'yOu neVER WaLK alOne in liFe'   ->  'YNWAIL'
 * 'good Morning'   -> 'GM'
 * 
 */



/**
 * split the sentence into an array -> 'have a great day'
 * 
 * pick index-0 value ('have') 
 * how to get first-character from a string -> (charAt(0) or substring(0,1))
 * convert into uppercase ('H')
 * abbr = "H"
 * 
 * * split the sentence into an array -> 'have a great day'
 * 
 * pick index-1 value ('A') 
 * how to get first-character from a string -> (charAt(0) or substring(0,1))
 * convert into uppercase ('A')
 * abbr = abbr + "A" // abbr = HA
 * 
 * pick index-2 value ('G') 
 * how to get first-character from a string -> (charAt(0) or substring(0,1))
 * convert into uppercase ('G')
 * abbr = abbr + "G" // abbr = HAG
 * 
 * pick index-3 value ('D') 
 * how to get first-character from a string -> (charAt(0) or substring(0,1))
 * convert into uppercase ('D')
 * abbr = abbr + "D" // abbr = HAGD
 * 
 * 
 * console.log(abbr)
 * 
 * to string 
 */
// WHAT IS THIS?
const sentence1 = 'have a great day'
let abbr = '';
const sentenceWords = sentence1.toUpperCase().split(' ');

for (let i=0 ; i <= sentenceWords.length-1 ; i++) {
    abbr = abbr + sentenceWords[i].substring(0,1);
}

console.log(`abbr -> ${abbr}`)

/* for (let counter = 0 ; counter <= sentence1 ; counter.charAt(0)) {      // i=0,2,4,6,etc
    console.log(sentence1[counter]);
}

console.log(abbr) */


/**
 * print the array-values in reverse order
 * 
 * eg:
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * Rugby
 * Baseball
 * BASKETBALL
 * Soccer
 * Football
 * 
 */
console.log(`\n\nabbreviation problem\n\n`)
const sports1 = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
let sportWords = sports1.reverse()
for (let i=0 ; i < sportWords.length-1 ; i++) {
    console.log(sportWords[i])
}

console.log(`\n\solution2\n\n`)
for (let i = sports.length-1 ; i >= 0 ; i--) {
    console.log(sports[i])
}

console.log(`\n\njust a console.log\n\n`)
console.log(sportWords)

// WHILE LOOPS
/**
 * print the array-values in reverse order
 * 
 * eg:
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * Rugby
 * Baseball
 * BASKETBALL
 * Soccer
 * Football
 * 
 */
 console.log(`\n\nusing while loop\n\n`)
 for (let counter = 0 ; counter <= sports.length-1 ; counter++) {
    console.log(sports[counter])
 }
/**
 * while loop
 * 
 * initialization 
 * while (condition) {
 *      while-loop
 *      code block
 *      code will keep executing until the conditions are true
 *      increment/decrement
 * }
 */
 
let w = 0
 while(w <= sports.length-1) {
    console.log(sports[w]);
    w++
 }

 // they say not to do do while loops 
/**
 * do-while loop
 * 
 * initialization 
 * do {
 *      do-whole loop
 *      code block
 *      code will execute
 *      Increment/decrement
 * } while (condition);
 * 
 *  ->  code inside the do while loop will always run at least once since you have no pre conditions before entering the loop 
 */
 console.log(`\n\nusing do while loop\n\n`)
let d = 0
do {
    console.log(sports[d]);
    d++;
} while (d <= sports.length-1);

