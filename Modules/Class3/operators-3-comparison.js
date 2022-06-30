/**
 * 3. Comparison Operators (>=, <=, >,<, ===,!==) never call it an exclamation mark!!!! Its called not
 * 
 * Note: all comparison results are boolean value 
 *  */ 

let num1 = 10;
let num2 = 20;

num1 >= num2

let num1GrEqNum2 = num1 >= num2;            // >= greater than or equal to 
console.log(`${num1} >= ${num2} = ${num1GrEqNum2}`)  // 10 >= 20 = false

let num1LeEqNum2 = num1 <= num2;            // <= less than or equal to 
console.log(`${num1} <= ${num2} = ${num1LeEqNum2}`)  // 10 >= 20 = false

let num1GrNum2 = num1 > num2;            // <= greater than or equal to 
console.log(`${num1} > ${num2} = ${num1GrNum2}`)  // 10 >= 20 = false

let num1LeNum2 = num1 < num2;            // <= Less than or equal to 
console.log(`${num1} < ${num2} = ${num1LeNum2}`)  // 10 >= 20 = false

/**
 * ! : this is the "not operator"
 * 
 * !== : to compare if two calues are NOT equal (in both value and same datatype)
 * != : to compare if two values are NOT equal (in value only)
 * 
 * 
 * === : to compare if two calues are equal (in both value and same datatype)
 * == : to compare if two values are equal (in value only )
 */

