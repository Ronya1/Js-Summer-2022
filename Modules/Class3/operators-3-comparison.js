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

/**
 * === : to compare if two values are equal (in value and same datatype)
 * 
 * == : to compare if two values are equal (in value)
 */
 let num1EqNum2 = num1 === num2;
 console.log(`\n${num1} === ${num2} = ${num1EqNum2}`);
 
 num1 = 20;
 num1EqNum2 = num1 === num2;
 console.log(`${num1} === ${num2} = ${num1EqNum2}`);
 
 num1 = '20';
 num1EqNum2 = num1 === num2;
 console.log(`${num1} === ${num2} = ${num1EqNum2}`);
 
 num1EqNum2 = num1 == num2;
 console.log(`${num1} == ${num2} = ${num1EqNum2}`);

 /**
 * !== : to compare if two values are NOT equal (in value and same datatype)
 * 
 * != : to compare if two values are NOT equal (in value)
 */
let num3 = 30;
let num4 = 40;

let num3NtEqNum4 = num3 !== num4;
console.log(`\n${num3} !== ${num4} = ${num3NtEqNum4}`);

num3 = '40';
num3NtEqNum4 = num3 !== num4;
console.log(`${num3} !== ${num4} = ${num3NtEqNum4}`);

num3NtEqNum4 = num3 != num4;
console.log(`${num3} != ${num4} = ${num3NtEqNum4}`);

/**
 * fTemp = 76
 * 
 * 
 * let cTemp = (76 - 32) * 5/9
 * 
 * cTemp = X
 * 
 * X should be equals to 25
 * 
 * Verify correct temp value displayed when user changes temp-units
 * 
 * 
 */