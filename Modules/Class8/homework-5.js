// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */
/**
 * HOW WOULD YOU SOLVE THIS
 * 1. create a variable for the sentence 
 * 2. convert variable into an array 
 * 3. capitalize the 0 index 
 */
// NO idea how I figured this out -> trial and error 
let sent1 = 'have a great day'.split(' ')
let sent1_TC = '';

for (i = 0 ; i <= sent1.length-1 ; i++){
    sent1_TC = sent1_TC + ' ' + sent1[i].substring(0,1).toUpperCase() + sent1[i].substring(1).toLowerCase();
}
console.log(sent1_TC)




/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
/**
 * HOW TO SOLVE THIS?
 * create an array
 * 
 */

let sent2 = 'have a great day'.split(' ')
let reversed_sent2 = '';

for (i = sent2.length-1 ; i >= 0 ; i--) {
    reversed_sent2 = reversed_sent2 + ' ' + sent2[i];
}
console.log(reversed_sent2)

/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
let myNumber = [1, 2, 3, 4, 5]
let storeOfVal = 0;
for (i = 0 ; i <= myNumber.length-1 ; i++) {
    storeOfVal = storeOfVal + myNumber[i];
}

console.log(storeOfVal)


/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
let myAverage = [1, 2, 3, 4, 5] // 15/5 = 3
let myAvg = 0;

for (i = 0 ; i <= myAverage.length-1 ; i++) {
    myAvg = myAvg + myAverage[i] / 5; 
}
console.log(myAvg)
