// Due Friday evening 

/**
 * Q1:
 * print the length of the country name (without using string-length property)
 */
let countryName = `United States` // 13

/**
 * How would I solve this? 
 * first conver this statement into an array using split 
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
 * 
 * YOU SHOULD HAVE SOLVED THIS QUESTION LIKE THIS: 
 *      1. split the string using .split and treat each word as its own entity -> .split(` `)
 *      2. Now you would do .substring (0,1) to grab the first letter only and set that .toUpperCase
 *      3. Then do word[0].substring(1).toLowerCase
 *      4. RESULT = word[0].substring(0,1).toUpperCase + word[0].substring(1).toLowerCase -> Have is the result
 *      4. RESULT = word[1].substring(0,1).toUpperCase + word[1].substring(1).toLowerCase -> A is the result
 *      4. RESULT = word[2].substring(0,1).toUpperCase + word[2].substring(1).toLowerCase -> Great is the result
 *      4. RESULT = word[3].substring(0,1).toUpperCase + word[3].substring(1).toLowerCase -> Day is the result
 * Store them all in their own variable and then concat the 4 - its much cleaner 
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
 * convert string to upper case 
 * use the substring function to pull out the first letters into variables 
 * then concat the varaiables into a string and print in console. 
 * 
 * THE WAY YOU SHOULD HAVE SOLVED THIS: (similar to the above)
 YOU SHOULD HAVE SOLVED THIS QUESTION LIKE THIS: 
 *      1. split the string using .split and treat each word as its own entity -> .split(` `)
 *      2. Now you would do .substring (0,1) to grab the first letter only and set that .toUpperCase
 *      4. RESULT = word[0].substring(0,1).toUpperCase -> H is the result
 *      4. RESULT = word[1].substring(0,1).toUpperCase -> A is the result
 *      4. RESULT = word[2].substring(0,1).toUpperCase -> G is the result
 *      4. RESULT = word[3].substring(0,1).toUpperCase -> D is the result
 * Store them all in their own variable and then concat the 4 - its much cleaner 
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



// REVISED HOMEWORK DONE THE RIGHT WAY - By the right way I mean we will be able to put it in a loop and its repeatable. 

/**
 * Q3: 
 * Convert any 4 word sentence into Titlecase and 
 * 
 * 
 * `have a great day` -> `Have A Great Day` 
 * `YOu lIVe ONlY ONcE` -> `You Live Only Once`
 */

/** How would you solve this? 
 * First convert the entire sentence to upper case 
 * Then create an array and treat every word as its own array 
 * Then pull index 0 and set it toUpperCase
 * Then pull the remaining indexes and set them toLowerCase 
 */

// converted sentence to all upper case -> same applies to the second sentence (can do it later not a priority)
const myRevised_Q3_2 = 'have a great day'
const myRevised_Q3_2_AllUpper = myRevised_Q3_2.toUpperCase('have a great day')
console.log(myRevised_Q3_2_AllUpper)

// converted all uppercase string into an array (each word is its own value / seperate entity)
let New_Arr = myRevised_Q3_2_AllUpper.split(" ")
console.log(New_Arr)

// Now take the arrays and call upon index-0 and set to upper case and teh rest to lowercase 
let firstWord = New_Arr[0].substring(0,1).toUpperCase() + New_Arr[0].substring(1).toLowerCase() + ' '
let secondWord = New_Arr[1].substring(0,1).toUpperCase() + ' '
let thirdWord = New_Arr[2].substring(0,1).toUpperCase() + New_Arr[2].substring(1).toLowerCase() + ' '
let fourhtWord = New_Arr[3].substring(0,1).toUpperCase() + New_Arr[3].substring(1).toLowerCase()

let myNewSentence_Q3_2_Revised = firstWord + secondWord + thirdWord + fourhtWord
console.log(myNewSentence_Q3_2_Revised)





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
 * HOW WOULD YOU SOLVE THIS?
 * 1.) convert the sentence into all upper case 
 * 2.) convert each word using split into its own array
 * 3.) call upon index 0 of the array and then concat them 
 */
// set to all upper 
const revised_Q4_2 = `have a great day`
const revised_Q4_2_Upper = revised_Q4_2.toUpperCase()
console.log(revised_Q4_2_Upper)

// converted to an array
let myNewArr_Q4_2 = revised_Q4_2_Upper.split(' ') 
console.log(myNewArr_Q4_2)

// pull each letter using substring and set to uppercase 
let firstWord_Q4_2 = myNewArr_Q4_2[0].substring(0,1).toUpperCase()
let secondWord_Q4_2 = myNewArr_Q4_2[1].substring(0,1).toUpperCase()
let thirdWord_Q4_2 = myNewArr_Q4_2[2].substring(0,1).toUpperCase()
let fourhtWord_Q4_2 = myNewArr_Q4_2[3].substring(0,1).toUpperCase()
let newAbbreviation_Q4_2 = firstWord_Q4_2 + secondWord_Q4_2 + thirdWord_Q4_2 + fourhtWord_Q4_2
console.log(newAbbreviation_Q4_2)


