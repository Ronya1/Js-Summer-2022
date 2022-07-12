let planets = ['EArtH', 'MerCUry', 'VeNUS', 'JuIPteR', 'Pluto', 'SatuRN', 'MARS'];
console.log(`\nplanets -> ${planets}`);

/**
 * To find the length of array (or number of values in an array)
 * property: .length
 * 
 */
 let totalPlanets = planets.length;
 console.log(`\nTotal planets in array -> ${totalPlanets}`);

/**
 * to access from any index in array 
 *  OR
 * to assign value at any index in the array 
 * -> we can use []
 *
 */
 const valueAtIndex2 = planets[2];
 console.log(`\nValue at index-2 -> ${valueAtIndex2}`);

planets[1] = 'MaN MadE planeT';     // assign new value at index-1
console.log(`\nplanets -> ${planets}`);

/**
 * to convert array into comma-seperated string value 
 * function: toString()
 */

const planetsString = planets.toString();
console.log(`\nplanetsString -> ${planetsString}`);
console.log(`type of planetsString -> ${typeof planetsString}`);

/**
 * to convert array into string with user-defined seperator 
 * function: join()
 * 
 * if user inputs the seperator, all array values will get joined using the seperator provided
 * If user doesnt input the seperator, all array values will get joined using default seperator (,)
 */
 const planetsJoin1 = planets.join('  ');
 console.log(`\nplanetsJoin1 -> ${planetsJoin1}`); 

 const planetsJoin2 = planets.join(); // will be joined with the default which is (,)
 console.log(`\nplanetsJoin2 -> ${planetsJoin2}`);

/**
 * to remove a value from an array 
 * function: pop() -> removes the last value from the array 
 *      returns the popped value 
 * 
 * function: shift() -> removes the first value from the array
 *      returns the shifted value (which is the first array)
 * 
 * function: delete() -> read more on this, didnt review much on this. 
 *      -> planets -> MaN MadE planeT, VeNUS, JuIPteR, Pluto 
 *      -> planets.delete(1)
 *      -> planets -> MaN MadE planeT, undefined, JuIPteR, Pluto
 * 
 * function changes the original array
 * 
 * to remove a value from an array you have 4 functions:
 *      Pop() vs shift() vs delete() vs splice () -> may be an interview question 
 * 
 */

 console.log(`\nplanets -> ${planets}`);
 const popedValue = planets.pop();
 console.log(`\npopedValue -> ${popedValue}`);
 
 console.log(`\nplanets -> ${planets}`);
 
 const shiftedValue = planets.shift();
 console.log(`\nshiftedValue -> ${shiftedValue}`);
 
 console.log(`\nplanets -> ${planets}`);
 
 const popedValueAgain = planets.pop();
 console.log(`\npopedValueAgain -> ${popedValueAgain}`);
 
 console.log(`\nplanets -> ${planets}`);


// planets -> MaN MadE planeT, VeNUS, JuIPteR, Pluto
// push -> Will return 5 
// planets -> MaN MadE planeT, VeNUS, JuIPteR, Pluto, SatuRN 

/**
 * to add a value in an array 
 * function: push() -> adds a value in the end of the array - it will not replace the last value it will only add 
 *      returns the new array length -> works like pop() function but adds  
 * 
 * function: unshift() -> to add value in the beginning of an array 
 *     returns the new array length -> works like shift() function but adds 
 * 
 * function changes the original value 
 * 
 * to add values in an array: 
 *      push() vs unshift() vs splice() vs concat()
 * 
 */

 const lenAfterPushFunction = planets.push('SatuRN');
 console.log(`\ntotal planets now -> ${lenAfterPushFunction}`);
 
 console.log(`\nplanets -> ${planets}`);
 
 const lenAfterUnshiftFunction = planets.unshift('EARth');
 console.log(`\ntotal planets now -> ${lenAfterUnshiftFunction}`);
 
 console.log(`\nplanets -> ${planets}`);
 
 const lenAfterUnshiftFunction2 = planets.unshift('SAturN');
 console.log(`\ntotal planets now -> ${lenAfterUnshiftFunction2}`);
 
 console.log(`\nplanets -> ${planets}`);
 

/**
 * to add/remove values in the array 
 * function: splice()
 *    needs 3 inputs / arguments 
 *      arg-1: from Index where we want add the new values 
 *      arg-2: how many values we want to remove 
 *      are-n: new values (input multiple with it seperated by comments)
 * 
 * function returns an array with the deleted/removed values
 */

// planets -> SAturN,EARth,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN

// first is where we want to add, then remove, then what to add. 
const arrayFromSplice1 = planets.splice(2, 0, 'A', 'B', 'C', 'D'); // this will return nothing since we deleted nothing
console.log(`\narrayFromSplice1 -> ${arrayFromSplice1}`);

console.log(`\nplanets -> ${planets}`); // this will return the new values we added to the array 

const arrayFromSplice2 = planets.splice(3,2); // it starts at index 3 and deletes 2 value, nothing added
console.log(`\narrayFromSplice2 -> ${arrayFromSplice2}`);   // B,C
console.log(`\nplanets -> ${planets}`); // planets -> SAturN,EARth,A,D,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN

/**
 * to remove last value from array 
 * pop() vs splice()
 */
// console.log(`\nplanets -> ${planets}`);
// planets.pop();
// planets.splice(planets.length-1, 1);


/**
 * to concat multiple arrays 
 * function: concat()
 *  function returns new array after joining all given arrays 
 * 
 */

// planets -> SAturN,EARth,A,D,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN
let fruits = ['mango', 'apple', 'banana', 'cherry'];
let states = ['ny', 'nj', 'ca', 'pa', 'tx'];

const combinedArray = planets.concat(fruits, states);

console.log(`\nplanets -> ${planets}`);
console.log(`fruits -> ${fruits}`);
console.log(`states -> ${states}`);
console.log(`combinedArray -> ${combinedArray}`);

// using concat() to add values 
const newFruits = fruits.concat('strawberry', 'MANGO'); // use concat method to add vlaues in the end of an array 
console.log(`\nfruits -> ${fruits}`);
console.log(`newFruits -> ${newFruits}`);


/**
 * to find if a given value is exactly present at any index in an array 
 * function: includes()
 *      arg-1: value which we want to check for
 *      arg-2: search should start from specified index
 * 
 * If the given value is exactly present in the array at any index 
 *      function will return true
 * otherwise 
 *      function will return false 
 */

// planets -> SAturN, EARth, A, D, MaN MadE planeT, VeNUS, JuIPteR, Pluto, SatuRN
console.log(`\nplanets -> ${planets}`);
const isIncludesPluto = planets.includes('Pluto');
console.log(`does include "Pluto" in planets -> ${isIncludesPluto}`);

const isIncludesMaN = planets.includes('MaN');
console.log(`does include "MaN" in planets -> ${isIncludesMaN}`);

const isIncludesA_D = planets.includes('A, D');
console.log(`does include "A, D" in planets -> ${isIncludesA_D}`);

const isIncludes_pluto = planets.includes('pluto');
console.log(`does include "pluto" in planets -> ${isIncludes_pluto}`);

const isIncludesEARth = planets.includes('EARth');
console.log(`does include "EARth" in planets -> ${isIncludesEARth}`);

const isIncludesEARth2 = planets.includes('EARth', 3);
console.log(`does include "EARth" in planets (starting from index-3) -> ${isIncludesEARth2}`);



/** 
 * to find the FIRST OCCURANCE of a given value at any given index in the array 
 * function: indexOf()
 * 
 * if the given value is exactly present at any index the 
 *      function returns the index of first occurance 
 * Otherwise
 *      function returns -1 
 *
 */

// planets -> SAturN,EARth,A,D,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN
console.log(`\nplanets -> ${planets}`);
planets = planets.concat('A', 'D', 'MaN MadE planeT', 'VeNUS', 'MaN MadE planeT', 'VeNUS', 'EARth', 'D', 'D');

console.log(`\nplanets -> ${planets}`);
// planets -> SAturN,EARth,A,D,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN,A,D,MaN MadE planeT,VeNUS,MaN MadE planeT,VeNUS,EARth,D,D

const indexOf_Earth = planets.indexOf('Earth');
console.log(`First occurrence of "Earth" is at index -> ${indexOf_Earth}`);                         // -1

const indexOf_MaN_MadE_planeT = planets.indexOf('MaN MadE planeT');
console.log(`First occurrence of "Man MadE planeT" is at index -> ${indexOf_MaN_MadE_planeT}`);     // 4

const indexOf_MaN_MadE = planets.indexOf('MaN MadE');
console.log(`First occurrence of "Man MadE" is at index -> ${indexOf_MaN_MadE}`);                   // -1

const indexOf_Apple = planets.indexOf('Apple');
console.log(`First occurrence of "Apple" is at index -> ${indexOf_Apple}`);                         // -1


/** 
 * to find the LAST OCCURANCE of a given value at any given index in the array 
 * function: lastIndexOf()
 * 
 * if the given value is exactly present at any index the 
 *      function returns the index of last occurance 
 * Otherwise
 *      function returns -1 
 *
 */

 console.log(`\nplanets -> ${planets}`);
 // planets -> SAturN,EARth,A,D,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN,A,D,MaN MadE planeT,VeNUS,MaN MadE planeT,VeNUS,EARth,D,D
 const lastIndexOf_Earth = planets.lastIndexOf('Earth');
 console.log(`Last occurrence of "Earth" is at index -> ${lastIndexOf_Earth}`);                          // -1
 
 const lastIndexOf_MaN_MadE_planeT = planets.lastIndexOf('MaN MadE planeT');
 console.log(`Last occurrence of "Man MadE planeT" is at index -> ${lastIndexOf_MaN_MadE_planeT}`);      // 13
 
 const lastIndexOf_MaN_MadE = planets.lastIndexOf('MaN MadE');
 console.log(`Last occurrence of "Man MadE" is at index -> ${lastIndexOf_MaN_MadE}`);                    // -1
 
 const lastIndexOf_Apple = planets.lastIndexOf('Apple');
 console.log(`Last occurrence of "Apple" is at index -> ${lastIndexOf_Apple}`);                          // -1
 
 const lastIndexOf_VeNUS = planets.lastIndexOf('VeNUS');
 console.log(`Last occurrence of "VeNUS" is at index -> ${lastIndexOf_VeNUS}`);                          // 14


/**
 * to find if the given value or variable is an array or not 
 * function: isArray() -> to use this function we need to use the class name Array.isArray()
 * 
 * if the variable is an array 
 *      funtion returns true
 * Otherwise 
 *      false 
 * 
 */

 let isPlanetsArray = Array.isArray(planets);
 console.log(`\nis "planets" an array -> ${isPlanetsArray}` );
 
 let isLastIndexOf_VeNUSArray = Array.isArray(lastIndexOf_VeNUS);
 console.log(`is "isLastIndexOf_VeNUSArray" an array -> ${isLastIndexOf_VeNUSArray}` );
 
/**
 * to fill an array with a specific value 
 * function: fill()
 *    3 inputs needed
 *      arg-1: new value to fill/add
 *      are-2: starting index (index from which we want to add/fill the value) 
 *      are-3: end index (index upto which we should fill/add value -- endindex is not included)
 * 
 * Note -> works like replace 
 *      -> changes the original array
 * 
 * if arg-2 and arg-3 are not mentioned 
 *      all values of array will be replaced with the new values 
 * 
 * if are-3 is not mentioned 
 *      all values from starting index will be replaced with the new value. 
 * 
 * Note -> function changes the original array
 */
 console.log(`\nfruits -> ${fruits}`);       // mango,apple,banana,cherry
 fruits.fill('happy', 2, 4);     // 2, 3
 console.log(`\nfruits -> ${fruits}`);       // mango,apple,happy,happy
 
 fruits.fill('Queen king');                  
 console.log(`\nfruits -> ${fruits}`);       // Queen king, Queen king, Queen king, Queen king
 
 fruits.fill('Apple', 1);
 console.log(`\nfruits -> ${fruits}`);       // Queen king, Apple, Apple, Apple


/**
 * NEVER USE THIS FUNCTION IN YOUR INTERVIEW OR CODING CHALLENGE. In the job you can use it but NEVER in INTERVIEW 
 * to reverse an array
 * function: reverse()
 * 
 */

// fruits -> Queen king, Apple, Apple, Apple
fruits.reverse();
console.log(`\nfruits -> ${fruits}`);

let letters = ['a' , 'b', 'c', 'd'];
console.log(`\nletters -> ${letters}`);
letters.reverse();
console.log(`\nletters -> ${letters}`);

// let letters = ['a' , 'b', 'c', 'd'];
letters.reverse();





















