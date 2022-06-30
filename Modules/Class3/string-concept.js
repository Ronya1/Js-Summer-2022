let cityName = `New York City`;         // treat this as string datatype - always write code like this 
console.log(`cityName -> ${cityName}`);

let cityName2 = new String(`New York City`)  // treat as object datatype 


console.log(typeof cityName);

console.log(typeof cityName2);

/**
 *  cityName == cityName2   // true because its looking for just value 
 * 
 * cityName === cityName2   // false because its lookign for datatype and calue 
 */

/**
 * length
 *      is a variable property of string class 
 *      used to get the number of characters in the string (or to get length of string)
 */

// let cityName = `New York City` 
let cityNameLength = cityName.length;
console.log(`\ncityName -> ${cityName}`); // will print out city name in terminal 
console.log(`Length = ${cityNameLength}`) // should be 13 

/**
 * To convert string into uppercase 
 * function: toUpperCase()
 * 
 * toUpperCase() does NOT change the original value in the variable
 */

let cityName_U = cityName.toUpperCase()
console.log(`cityName -> ${cityName}`)
console.log(`cityName_U -> ${cityName_U}`)

/**
 * Creplace original value with uppercase value
 */

let cityName1 = `New York City`;
console.log(`cityName -> ${cityName1}`)
cityName1 = cityName1.toUpperCase()
console.log(`cityName1 -> ${cityName1}`)


/**
 * To convert string into lowercase 
 * function: toLowerCase()
 * 
 * toLowerCase() does NOT change the original value in the variable
 */

 let cityName_L = cityName1.toLowerCase()
 console.log(`\ncityName -> ${cityName}`);
 console.log(`cityName_L = ${cityName_L}`);

 // let cityName = `New York City`
 // does cityName start with 'n'

 /**
  * To find if the string starts with the exact given pattern
  * function: startsWith()
  * 
  * if string starts with given patterns 
  *         method returns true
  * Otherwise 
  *         Method returns false 
  * 
  */


// let cityName = 'New YOrK ciTy';
let cityNameStartsWith_n = cityName.startsWith('n');
console.log(`\ncityName -> ${cityName}`);
console.log(`is ${cityName} start with 'n' : ${cityNameStartsWith_n}`);

let cityNameStartsWith_New_Y = cityName.startsWith('New Y');
console.log(`\ncityName -> ${cityName}`);
console.log(`is ${cityName} start with 'New Y' : ${cityNameStartsWith_New_Y}`);

/**
 * Example for ignoring pattern with StartsWith
 */

let startsWithPattern = 'neW y';
startsWithPattern = startsWithPattern.toUpperCase();    // NEW Y
let cityName_Uppercase = cityName.toUpperCase();        // NEW YORK CITY
let cityNameStartsWith_neW_Y = cityName_Uppercase.startsWith(startsWithPattern);
console.log(`\ncityName -> ${cityName}`);
console.log(`is ${cityName} start with 'neW Y' : ${cityNameStartsWith_neW_Y}`);

// let res = cityName.toUpperCase().startsWith(startsWithPattern.toUpperCase());
// console.log(res);



