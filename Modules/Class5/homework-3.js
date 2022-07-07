// Due Friday evening 

/**
 * Q1:
 * print the length of the country name (without using string-length property)
 */
let countryName = `United States` // 13

/**
 * How would I solve this? 
 * first conver this statement into an array 
 * then have have a function to find the number of values in my array? 
 */
let myStmt1 = countryName.split('');
console.log(myStmt1);
console.log(myStmt1.length);
//console.log(myStmt1[0])



/**
 * Q2: 
 * Count the number of words in the sentence below 
 */
const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

/**
 * How would I solve this? 
 * Convert all words using split or slice into an array and then count the number of indexes in the Array? 
 *
 */
let myCustomArray = sentence.split(` `);
console.log(myCustomArray)
console.log(myCustomArray.length)
// console.log(myCustomArray[3])



/**
 * Q3: 
 * Convert any 4 word sentence into Titlecase and 
 * 
 * 
 * `have a great day` -> `Have A Great Day` 
 * `YOu lIVe ONlY ONcE` -> `You Live Only Once`
 * 
 */

/**
 * How would I solve this? 
 * first covert the entire string into all lower case 
 * then use the slice or split or other methor to create an attay and count the number of words in the array? 
 * then for each of the arrays create a seperate to uppercase and to lowecase then concat the entire string into 1? 
 * 
 * Maybe uppercase the entire string then convert to Array and call upon the specific letters in the array 
 */

// `have a great day` -> `Have A Great Day` 
const mySentence_Q3_1 = 'have a great day'
let firstWord_Upper =  mySentence_Q3_1.substring(0,1).toUpperCase() // Result = H
let firstWord_Lower = mySentence_Q3_1.substring(1,5).toLowerCase() // Result = ave
let secondWord_Upper =  mySentence_Q3_1.substring(5,6).toUpperCase() // Result = A
let thirdWord_Upper =  mySentence_Q3_1.substring(7,8).toUpperCase() // Result = G
let thirdWord_Lower = mySentence_Q3_1.substring(8,12).toLowerCase() // Result = reat
let fourthWord_Upper =  mySentence_Q3_1.substring(13,14).toUpperCase() // Result = d
let fourthWord_Lower = mySentence_Q3_1.substring(14).toLowerCase() // Result = ay
console.log(firstWord_Upper) // For output testing purposes 

let myNewSentence_Q3_1 = (firstWord_Upper + firstWord_Lower + secondWord_Upper + ` ` + thirdWord_Upper + thirdWord_Lower + ` ` + fourthWord_Upper + fourthWord_Lower)
console.log(myNewSentence_Q3_1)

// `YOu lIVe ONlY ONcE` -> `You Live Only Once`
const mySentence_Q3_2 = 'YOu lIVe ONlY ONcE'
const mySentence_Q3_2_Lower = mySentence_Q3_2.toLowerCase()
// console.log(mySentence_Q3_2_Lower)

let firstWord_Upper_Q3_2 =  mySentence_Q3_2_Lower.substring(0,1).toUpperCase() // Result = Y
let firstWord_Lower_Q3_2 = mySentence_Q3_2_Lower.substring(1,3).toLowerCase() // Result = ou
let secondWord_Upper_Q3_2 =  mySentence_Q3_2_Lower.substring(4,5).toUpperCase() // Result = L
let secondWord_Lower_Q3_2 =  mySentence_Q3_2_Lower.substring(5,8).toLowerCase() // Result = ive
let thirdWord_Upper_Q3_2 =  mySentence_Q3_2_Lower.substring(9,10).toUpperCase() // Result = O
let thirdsWord_Lower_Q3_2 =  mySentence_Q3_2_Lower.substring(10,13).toLowerCase() // Result = nly
let fourthWord_Upper_Q3_2 =  mySentence_Q3_2_Lower.substring(14,15).toUpperCase() // Result = O
let fourthWord_Lower_Q3_2 =  mySentence_Q3_2_Lower.substring(15).toLowerCase() // Result = nce
// console.log(firstWord_Upper_Q3_2)// For output testing purposes 

let myNewSentence_Q3_2 = (firstWord_Upper_Q3_2 + firstWord_Lower_Q3_2 + ` ` + secondWord_Upper_Q3_2 + secondWord_Lower_Q3_2 + ` ` + thirdWord_Upper_Q3_2 + thirdsWord_Lower_Q3_2 + ` ` + fourthWord_Upper_Q3_2 + fourthWord_Lower_Q3_2)
console.log(myNewSentence_Q3_2)


/* let findIndex = mySentence_Q3_2_Lower.charAt(12)
console.log(findIndex) */
/* 



/**
 * Q4:
 * Create abbreviation from any 4 word sentence 
 * 
 * `have a great day` -> `HAGB`
 * `YOu lIVe ONlY ONcE` -> `YLOO`
 * `yOu neVER WaLK alOne` -> `YNWA`
 * 
 */

/**
 * How Would I Solve this? 
 * 
 */

/* const mySentence_Q4_1 = "have a great day" // Created a const since the sentence is not changing 
let myUpper1 = mySentence_Q4_1.toUpperCase(mySentence_Q4_1) // set all values to upper case 
console.log(myUpper1) // printed to confirm result 
let myArrays_1 = myUpper1.split(``) // Converted entire string to an Array using split function 
console.log(myArrays_1) // confirmed result of Array 
console.log(myArrays_1[0],myArrays_1[5],myArrays_1[7],myArrays_1[13]) // THIS IS WRONG YOU SHOULD USE SUBSTRING MULTIPLE TIMES STORE EACH VALUE IN A VARIABLE THEN CONCAT
 */

//`have a great day` -> `HAGB`
const mySentence_Q4_1 = "have a great day" // Created a const since the sentence is not changing 
let myUpper1 = mySentence_Q4_1.toUpperCase(mySentence_Q4_1) // set all values to upper case
console.log(myUpper1) // printed to confirm result
let letterH = myUpper1.substring(0,1)
let letterA = myUpper1.substring(5,6)
let letterG = myUpper1.substring(7,8)
let letterD = myUpper1.substring(13,14)
console.log(letterH)
console.log(letterA)
console.log(letterG)
console.log(letterD)
let myTitleCase_Q4_1 = (letterH + letterA + letterG + letterD)
console.log(myTitleCase_Q4_1)// Prints HAGD

// `YOu lIVe ONlY ONcE` -> `YLOO`
const mySentence_Q4_2 = "YOu lIVe ONlY ONcE" // Created a const since the sentence is not changing 
let myUpper2 = mySentence_Q4_2.toUpperCase(mySentence_Q4_2) // set all values to upper case
console.log(myUpper2) // printed to confirm result
let letterY = myUpper2.substring(0,1) // Y
let letterL = myUpper2.substring(4,5) // L
let letterO = myUpper2.substring(9,10) // O
let letterO_2 = myUpper2.substring(14,15) // O
console.log(letterY)
console.log(letterL)
console.log(letterO)
console.log(letterO_2)
let myTitleCase_Q4_2 = (letterY + letterL + letterO + letterO_2)
console.log(myTitleCase_Q4_2) // Prints YLOO

// `yOu neVER WaLK alOne` -> `YNWA`
const mySentence_Q4_3 = "yOu neVER WaLK alOne" // Created a const since the sentence is not changing 
let myUpper3 = mySentence_Q4_3.toUpperCase(mySentence_Q4_3) // set all values to upper case
console.log(myUpper3) // printed to confirm result
let letterY_Q4_3 = myUpper3.substring(0,1) // Y
let letterN_Q4_3 = myUpper3.substring(4,5) // N
let letterW_Q4_3 = myUpper3.substring(10,11) // W
let letterA_Q4_3 = myUpper3.substring(15,16) // A
console.log(letterY_Q4_3)
console.log(letterN_Q4_3)
console.log(letterW_Q4_3)
console.log(letterA_Q4_3)
let myTitleCase_Q4_3 = (letterY_Q4_3 + letterN_Q4_3 + letterW_Q4_3 + letterA_Q4_3)
console.log(myTitleCase_Q4_3) // Prints YLOO