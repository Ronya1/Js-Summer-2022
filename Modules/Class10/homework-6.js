// Due date: Thu (July 21) eod

/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */
/**
 * 1. what is the purpose of function?
 *      toTitleCase (a sentence)
 * 
 * 2. Do I need any input from user?
 *      yes -> the sentence which needs to be titlecased
 * 
 * 3. Should I return any value back to user at the end of my function?
 *      yes -> the titlecased sentence
 * 
 */

/** 
 * HOW WOULD YOU SOLVE THIS FROM SCRATCH? 
 * 1.) create a function with the name toTitleCase and let the user input be labeled sentence. -> "function toTitleCase (sentence)" 
 * 2.) create a variable for the users input and then to split that input into an array -> "let sent1_1 = sentence.split(' ')"
 * 3.) create a varibale to store the data from the loop -> "let sent1_TC1 = '';"
 * 4.) create a for loop starting at 0 ; going to the last length of the array incrementing by 1 -> for (i = 0; i <= sent1_1.length-1 ; i++)
 * 5.) set the palce holder value to be equal to the place holder value plus the loop -> "sent1_TC1 = sent1_TC1 "
 * 6.) have the loop pick the first first letter using substring(0,1).touppercase + the rest of the index value substring(1).tolowercase
 * 7.) set the return value to return the variable we used to store the values of the loop. -> " return sent1_TC1"
 * 8.) test the function to ensure it works -> "console.log(toTitleCase('YOu lIVe ONlY ONcE'))"
 * 
*/
function toTitleCase (sentence) {
    let sent1_1 = sentence.split(' ')
    let sent1_TC1 = '';
    for (i = 0; i <= sent1_1.length-1 ; i++) {
        sent1_TC1 = sent1_TC1 + ' ' + sent1_1[i].substring(0,1).toUpperCase() + sent1_1[i].substring(1).toLowerCase();
    } 
    return sent1_TC1
}
console.log(toTitleCase('have a great day'))
console.log(toTitleCase('YOu lIVe ONlY ONcE'))
console.log(toTitleCase('gooD mORNIng'))
console.log(toTitleCase('apple banana cherry'))

console.log(`\n\npage break\n\n`)



/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

/**
 * 1. what is the purpose of function?
 *      toReverseWords (by words not letters)
 * 
 * 2. Do I need any input from user?
 *      yes -> the sentence which needs to be reversed 
 * 
 * 3. Should I return any value back to user at the end of my function?
 *      yes -> the reversed sentence
 * 
 */

/** 
 * HOW WOULD YOU SOLVE THIS FROM SCRATCH? 
 * 1.) create a function with the name toReverseWords and let the user input be labeled sentence. -> "function toReverseWords (sentence)" 
 * 2.) create a variable for the users input and then to split that input into an array -> "let sent2_2 = sentence2.split(' ')"
 * 3.) create a varibale to store the data from the loop -> "let reversed_sent = '';"
 * 4.) create a for loop starting at sent2_2.length-1 ; going to the first length of the array decremented by 1 -> for (i = sent2_2.length-1 ; i >= 0 ; i--) 
 * 5.) set the palce holder value to be equal to the place holder value plus the loop -> "reversed_sent = reversed_sent"
 * 6.) set the return value to return the variable we used to store the values of the loop. -> "return (reversed_sent)"
 * 7.) test the function to ensure it works -> "console.log(toTitleCase('have a great day'))"
 * 
*/
function toReverseWords (sentence2) {
    let sent2_2 = sentence2.split(' ')
    let reversed_sent = '';
    for (i = sent2_2.length-1 ; i >= 0 ; i--) {
        reversed_sent = reversed_sent + sent2_2[i] + ' ';
    }
    return reversed_sent
}

console.log(toReverseWords('have a great day'))
console.log(toReverseWords('good morning'))
console.log(toReverseWords('hello dear how are you doing'))
console.log(toReverseWords('Learn'))

console.log(`\n\npage break\n\n`)



/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
/**
 * 1. what is the purpose of function?
 *      toTotalArray 
 * 
 * 2. Do I need any input from user?
 *      yes -> the numbers  
 * 
 * 3. Should I return any value back to user at the end of my function?
 *      yes -> the total
 */

 function toTotalArray (numbers) {
 let storeOfVal = 0;
 for (i = 0 ; i <= numbers.length-1 ; i++) {
    storeOfVal = storeOfVal + numbers[i];
    }
    return storeOfVal
}
 console.log(toTotalArray([1, 2, 3, 4, 5]))
 console.log(toTotalArray([1, 1, 1, 2, 3, 1, 2]))
 console.log(toTotalArray([1, -1]))

 console.log(`\n\npage break\n\n`)


/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 function toAverageArray (numbers2) {
    let storeOfVal = 0;
    for (i = 0 ; i <= numbers2.length-1 ; i++) {
       storeOfVal = storeOfVal + numbers2[i] / numbers2.length;
       }
       return storeOfVal
 }

 console.log(toAverageArray([2,4,6,8,10]))
 console.log(toAverageArray([1, 1, 1, 2, 3, 1, 2]))
 console.log(toAverageArray([1, -1]))