/** 
 * To compare if 2 strings are equal
 * function: localCompare
 * 
 * If both strings are equal to each other, the function returns zero (0)
 * If string is greater than another, function returns 1 
 * If string is lesser than another, function returns -1 
 * 
 */
let stmt1 = "New York City"
let stmt2 = "New York City"

const isEqual1 = stmt1.localeCompare(stmt2)
console.log(isEqual1) // `is stmt1 equal to stmt2 = ${isEqual1}`

/**
 * If you want to slice out a piece of string from a given string 
 * functions: 
 * substring -> he uses these more than the other 2.
 * slice() 
 * substr
 * 
 * 
 * let stmt1 = "New York City"
 * give me value from index-1 to index-4 (BUT do not include Index-4) -> Answer would be `ew `
 * 
 * give me value from index-1  -> `ew York City`
 * 
 * give me value from index-0 to index-1 (BUT do not include Index-1) ->  `N` will be your answer 
 * 
 * give me value from index-last -> `Y`
 * 
 * 
 * 
 * To Extract a part of string from a given string 
 * substring(start ) - To get string from staart-index to end - can input just the starting index 
 * 
 * substring(start, end ) - To get string from start-index upto end-index (excluding end-index) - or can provide the starting index and ending index 
 * 
 * substring does NOT change the original value in the variable
 * returns the extracted string 
 * 
 * If the end index is missing or invalid -> function returns upto the end. 
 * If the start index is invalid -> function returns from the start
 * If he starting index and ending index are invalid -> function returns empty string. 
 * 
 */

// THE BELOW IS ALL SUBSTRING 
let mySentence = `pages that you view in this window wont appear in the browser history`
const subString1_4 = mySentence.substring(1,4)
console.log(`mySentence -> ${mySentence}`)
console.log(`substring from 1 to 4 -> ${subString1_4}`)

const subString0_1 = mySentence.substring(0,1)
console.log(`substring from 1 to 4 -> ${subString0_1}`)


/* Print the last character present in mySentence using substring
* Find the length  
* substring(len-1)
*/

let mySentenceLength = mySentence.length
const lastCharacter = mySentence.substring(mySentenceLength -1)
console.log(`Last character in mySentence -> ${lastCharacter}`)

// If you have more in your end character it will simpy return you up to your last character even though there arent 20 characters in hello 
const mySentence2 = `heplo`;
const myResult2 = mySentence2.substring(2,20); // or if they did (-2,20) this method will treat -2 as 0 so you will still get hello
console.log(myResult2)


// THE BELOW IS ALL Slice()
/**
 * Slice(start, end) - slice works almost the same way as substring. the only difference is it accounts negative values 
 *  
 *  */ 

// Hello
 console.log(`\nusing Slice-Function`)
const myResult6 = mySentence2.slice(1,3);
console.log(`\nmyResult -> ${myResult6}`)

const myResult7 = mySentence2.slice(1);
console.log(`\nmyResult -> ${myResult7}`)

const myResult8 = mySentence2.slice(-3,-1); // it will start from the back the negative means it starts from -3 to -1 
console.log(`\nmyResult -> ${myResult8}`)

// THE BELOW IS ALL substr
/**
 * substr(start, length)
 * 
 * 
 */

 console.log(`\nusing substr-Function`)
const myResult9 = mySentence2.substr(2,2); // Heplo 
console.log(`\nmyResult9 -> ${myResult9}`)


/**
 * To split the given string from a specific point into multiple strings 
 * function: split()
 * returns -> Array
 * 
 * `New York City`
 * 
 * `New` `York` `City` - split function returns all of these values in an array. 
 */

let cityName = `New York City is the WoRLD BEST cIty iN THE ENTIRE worLD you can check`;

const cityName_Split_o = cityName.split(`0`)
console.log(`\nsplit by o -> ${cityName_Split_o}`) // New York City is the WoRLD BEST cIty iN THE ENTIRE worLD you can check

const cityName_Space = cityName.split(` `)
console.log(`\nsplit by ' ' -> ${cityName_Space}`) // New,York,City,is,the,WoRLD,BEST,cIty,iN,THE,ENTIRE,worLD,you,can,check

const cityName_Split_nothing = cityName.split(``)
console.log(`\nsplit by '' -> ${cityName_Split_nothing}`) // N,e,w, ,Y,o,r,k, ,C,i,t,y, ,i,s, ,t,h,e, ,W,o,R,L,D, ,B,E,S,T, ,c,I,t,y, ,i,N, ,T,H,E, ,E,N,T,I,R,E, ,w,o,r,L,D, ,y,o,u, ,c,a,n, ,c,h,e,c,k

const cityName_Split_or = cityName.split(`or`)
console.log(`\nsplit by '' -> ${cityName_Split_or}`) // New Y,k City is the WoRLD BEST cIty iN THE ENTIRE w,LD you can check


/**
 * Make sure the user enters full name 
 * print result as true or false 
 * 
 * 
 * if user entered full name (firstname and lastname), print true 
 * otherwise, print false
 */

let fullName = `happy peace`;

/**
 * `happy peace`
 * split() by spave ` ` -> [`happy` , `peace`]
 * [`happy` , `peace`] -> length
 * length === 2 (print true)
 *  
 * `happy peace laugh`
 * split() by spave ` ` -> [`happy` , `peace`, `laugh`]
 * [`happy` , `peace`, `laugh`] -> length
 * length === 2 (print false)
 * 
 * 
 * `happy 
 * split() by spave ` ` -> [`happy`]
 * [`happy`] -> length
 * length === 2 (print false)
 * 
 */

let arrayAfterSplit = fullName.split(` `);
let arrayLengthCheck = arrayAfterSplit.length === 2;
console.log(`does user entered fullname : ${arrayLengthCheck}`)

/**
 * convert below word into Titlecase 
 * 
 * hello -> Hello 
 * hElLo -> Hello 
 */

let word = `laUgh`  // Laugh is expected answer 

/**
 * laUGh to lowercase (laugh)
 * 
 * laugh -> substring(0,1) -> l -> toUppercase -> L
 * 
 * laugh -> substring(2) -> augh ->
 * 
 * L + augh -> Laugh
 */

let wordLowercase = word.toLowerCase()

let firstLetterUppercase = wordLowercase.substring(0,1).toUpperCase() //first taking the string, taking out the L then upercasing it L

let allLetters = wordLowercase.substring(1) //now this will give you augh

let refinedWord = firstLetterUppercase.concat(allLetters)

console.log(`converted to "${word}" into "${refinedWord}"`)

