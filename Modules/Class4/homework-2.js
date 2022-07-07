// Due Date : Tuesday Jul-05

// TASK 1 
const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0; // write like this? let result1 = statementOfLength2
// Console.log(result1)
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
//console.log(`result1 -> ${result1}`);
// MY CODE IS BELOW: 

let lengthOfSentence1A = sentence1.length
let statementOfLength2 = lengthOfSentence1A >= 10 ? 15 : 25
console.log(statementOfLength2)
// The above is complete 


// TASK 2 
const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */

// MY WORK BELOW:
let sentence2_Replace_All_AZ = sentence2.replace(/a/gi, `Alpha`)
console.log(sentence2_Replace_All_AZ)
// The above is complete 



// TASK 3 
const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */

// 1. the length of sentence-3
let lenght3 = sentence3.length 
console.log(lenght3)

// 2. does sentence-3 starts with 'health' (ignore cases)
let AllLower_Case = sentence3.toLowerCase() 
let NewLowerCase = AllLower_Case.startsWith(`health`)
console.log(NewLowerCase)

// 3. does sentence-3 contains with 'Body' (ignore cases)
let AllLower_case2 = sentence3.toLowerCase()
let NewLowerCase2 = AllLower_case2.includes(`body`)
console.log(NewLowerCase2) 

// 4. index of 'Body' in sentence3  (ignore cases)
let AllUpperCase = sentence3.toUpperCase()
let TheIndexOf_Body = AllUpperCase.indexOf(`BODY`)
console.log(TheIndexOf_Body) 

// 5. the last-character in sentence-3
let last_Character = sentence3.charAt(sentence3.length - 1)
console.log(last_Character)


// 6. word 'Body' is present only once. (true or false)
let Present_Once = sentence3.toLowerCase()
let Present_Once_REsult = Present_Once.includes(`body`)
console.log(Present_Once_REsult)

// function countOccurences(string, word) {
//     //let loweCaseString = string.toLowerCase;
//     return string.split(word).length - 1;
//  }

/* let result; 
 if (countOccurences(sentence3, "body") == 1){
    result = true;
 }else result = false; */