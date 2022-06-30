let num1 =10
// num1 +1 same as num1++
num1++;  // num1 = num1 +1 - Example 1 

num1+1;  // this is wrong because the variable is not being stored anywhere Example 2
num1 = num1 +1; // this is the correct way to write it 

/**
 * Decrement operator (--)-> durring job interviews this can be a tricky question but in real life its very simple 
 *      Decreases the value in variable by 1
 * 
 * num1 = 10;
 * num1--;      //num1 = 9
 * 
 */

/**
 * Post-Decrement 
 *      Post Decrement executed always after all operators 
 * pre-Decrement 
 *     Pre Decrement executed always before all operators 
 * 
 */

num1--;     // post decrement 
--num1;     // Pre-decrement

// The Below is wrong, wait for adjustment
//let num2 = 20;
//let res2 = num2++ - num2;   // sub , assign , post-increment
// take a look in to logic
    /*
        let res2 = num2++ - num2;
        let res2 = num2 - num2;     // 0
        let res2 = 0;               // res2 = 0

        num2++                      21
    */
////console.log(`res2 = ${res2}`);      // 0
console.log(`num2 = ${num2}`);      // 21


// The below is right - maybe because above we declared num2 twice and its throwing an error 
let num2 = 20;
let num3 = 20;
let res2 = num2++ - num3; // subtraction, assign, post increment 
/*
    let res2 = num2++ - num2; 
    let res2 = num2 - num2; // 0
    let res2 = 0;           // res2 = 0

    num2++                    21
*/

console.log(`res2 = ${res2}`)
console.log(`num2 = ${num2}`)




