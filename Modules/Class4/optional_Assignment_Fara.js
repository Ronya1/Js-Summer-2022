// 1. Write a JavaSC program that takes three numbers as input to calculate  and print the average of the numbers.

let number1 = 7
let number2 = 14
let number3 = 21
let answer = (number1 + number2 + number3 )
console.log(answer/3) 
// not sure if this is what you meant by write a program, it seems too simplistic what if I had 1,000 numbers? 


/* 2. Write a JavaSC program to print an American flag on the screen.  Expected 
Output
* * * * * * ==================================                   
 * * * * *  ==================================                   
* * * * * * ==================================                   
 * * * * *  ==================================                   
* * * * * * ==================================                   
 * * * * *  ==================================                   
* * * * * * ==================================                   
 * * * * *  ==================================                   
* * * * * * ==================================                   
==============================================                   
==============================================                   
==============================================                   
==============================================                   
==============================================                   
============================================== */

console.log(`* * * * * * ==================================                   
* * * * *  ==================================                   
* * * * * * ==================================                   
* * * * *  ==================================                   
* * * * * * ==================================                   
* * * * *  ==================================                   
* * * * * * ==================================                   
* * * * *  ==================================                   
* * * * * * ==================================                   
==============================================                   
==============================================                   
==============================================                   
==============================================                   
==============================================                   
==============================================`)



/* 3. Write a JavaSC program to swap two variables.
let a, b, temp;
   a = 15;
   b = 27; */

let a = 15, b = 27;
[a, b] = [b, a];
console.log(`${a} ${b}`);
/* Not sure on this one either as my terminal prints out 27 and 15 what if I wanted to change them in a string for example 
"the class has 25 students and only 17 will pass" -> "the class has 17 students and only 25 will pass" as an example */


// 4. Check from Terminal if Java Script is installed on your computer node -v
// Done 


/* Write a JavaSC program to compare two numbers.  Input Data:
Input first integer: 25
Input second integer: 39
Expected Output
25 != 39                                                         
25 < 39                                                          
25 <= 39 */

let num1 = 25
let num2 = 39

let expression = num1 !== num2
let expression2 = num1 < num2
let expression3 = num1 > num2
console.log(`${num1} != ${num2} = ${expression}`)
console.log(`${num1} < ${num2} = ${expression2}`)
console.log(`${num1} > ${num2} = ${expression3}`)


/* Write a JavaSC program to count the letters, spaces, numbers and other 
characters of an input string. */

let sentence1 = `I dont recall going over how to count mnumbers alone, letters alone and speaces alone - all google 123`
console.log(sentence1.length)
let SpaceOut = (sentence1.split(` `).length - 1);
console.log(SpaceOut)
console.log("I dont recall going over how to count mnumbers alone, letters alone and speaces alone - all google 123".replace(/[^0-9]/g,"").length);
// I googled this whole sequence as I dont recall going over this in class not sure if thats ok. 


/* Write a Java SC program to reverse a string */
let string = "Coding is fun and challenging"
string = [...string].reverse().join("");

console.log(string); // "Coding is fun and challenging!"