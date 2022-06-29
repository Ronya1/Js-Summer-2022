/**
 * Arithmetic (+,-,*,/,%,++,--)
 * 
 * +
 * -
 * *
 * /
 * % -> Modulus
 * ++ -> Increment 
 * -- -> Decrement 
 * 
 * 
 */

let num1 = 10;
let num2 = 20;
let num3 = num1 + num2;
console.log(`${num1} + ${num2} = ${num3}`);

console.log(`${num1} + ${num2} = ${num1+num2}`);

console.log(`${num1} - ${num2} = ${num1-num2}`);

console.log(`${num1} * ${num2} = ${num1*num2}`);

console.log(`${num1} / ${num2} = ${num1/num2}`);

/**
 * Modulus % -> works with whole numbers -> find the remaining value from division
 * 
 * Division: 
 *      10/2 = 5 (remainder = 0)
 *      9/2 = 4 (remainder = 1)
 *      8/3 = 2 ( remainder = 2)
 *      7/10 = 0 (remainder = 7)
 *      10/7 = 1 (remainder = 3)
 *      
 * 
 */
num1 = 10;
num2 = 2;
num3 = num1 % num2;
console.log(`${num1} % ${num2} = ${num3}`);

num1 = 7;
num2 = 10;
num3 = num1 % num2;
console.log(`${num1} % ${num2} = ${num3}`);


/**
 * increment operator (++)-> durring job interviews this can be a tricky question but in real life its very simple 
 *      Increases the value in variable by 1
 * 
 * num1 = 10;
 * num1++;      //num1 = 11
 * 
 */
num1 = 10; 
console.log(`num1 = ${num1}`); //num1 = 10
num1++
console.log(`num1 = ${num1}`); //num1 = 11

num1 = 10; // (assignment, increment)
console.log(`num1 = ${num1}`); //num1 = 10
num1++; //post-increment
console.log(`num1 = ${num1}`); //num1 = 11

num1 = 10; 
console.log(`num1  = ${num1}`); //num1 = 10
++num1; //pre-increment
console.log(`num1 = ${num1}`); //num1 = 11


/**
 * Post-increment 
 *      Post increment executed always after all operators 
 * pre-increment 
 *     Pre increment executed always before all operators 
 * 
 */
num1 = 10
 let num4 = num1++; //(assignment, post-increment operator)
 console.log(`num1 = ${num1}`); //num1 = 11 - this is done last since its post increment 
 console.log(`num4 = ${num4}`); //num4 = 10 - this is done first as the assignement is first 

 num1 = 10
 let num5 = ++num1; //(pre-increment operator, assignment)
 console.log(`num1 = ${num1}`); //num1 = 11 
 console.log(`num5 = ${num5}`); //num5 = 11

 let lvar1 = 10;
 let lvar2 = 20;
 let lvar3 = 30;
 let lvar4 = 40;

 let res1 = lvar1 + lvar2++; //(order is: addition, assignment, post-increment)Post will always be at the end. 
 console.log(`\n\nlvar1 = ${lvar1}`); //10
 console.log(`lvar2 = ${lvar2}`); //21 
 console.log(`res1 = ${res1}`); //30

 // \n\n is just tab 2 times to make space in the terminal 

 let abc = 2 + 1; // java script solves from left to right which would make the variable 3 
 let x = 2-4+1*3 // assignment, subtraction, add, multiply - assignement comes last in this 
// Changes to multi, add,sub, assignment

// lvar=10 , lvar2=21
let res2 = lvar1++ - ++lvar2 //(Order is: pre-increment, subtraction, assignment, post-increment)
    /*
    pre-increment = lvar2 = 22
    subtraction = lvar1 - lvar2 = -12 (11-23 = -12)
    assignment = res2 = -12
    post-increment = lvar1 = 11
    If you dont know the sequence then your fucked! 
    */

console.log(`\n\nlvar1 = ${lvar1}`); // 11
console.log(`lvar2 = ${lvar2}`); // 22
console.log(`res2 = ${res2}`); // -12

// Group work excercise 
/**
 * 1. Create a variable name teamSize and assign your team size value to that variable 
 * 2. Post Increment your teamSize by 1
 * 3. Create new variable name teamName and assign your team name to it. 
 * 4. construct a string which should display below text 
 * 
 * Our Team name is ABC and our team size is N.
 */


// this is what I did and it after trouble shooting I have to add a step. 
let teamSize = 6;
let teamName = `koala`;
let newTeam = teamSize++;
console.log (teamSize)
console.log(`Our Team name is ${teamName} and our team size is ${teamSize}`);

// this was another way to do it 
let teamSize2 = 6;
teamSize2++
let teamName2 = `koala`;

console.log(`Our Team name is ${teamName2} and our team size is ${teamSize2}`);

let teamSize3 = 6;
let teamName3 = `koala`;
let newTeam3 = ++teamSize3;
console.log (teamSize)
console.log(`Our Team name is ${teamName} and our team size is ${newTeam3}`);


// Home work practice problems - No need to submit 

/**
 *  Create a variable name accountBalance and assign 1000 to that variable
2. Lets assume you spent $1 at the park when you went our for walk
3. Post Decrement a dollar from you accountBalance
4. Construct a string which should display below text

I spent a dollar to buy a water and not my new balance is N
*/
let accountBalance = 1000
accountBalance--

console.log(`I spent a dollar to buy a water and not my new balance is ${accountBalance}`)


/** 
1. Create a variable name age and assign your age to that variable
2. Lets assume today is your birthday 
3. Post Increment your age
4. Construct a string which should display below text

Since today is my birthday, I am N years of old
 */

let myAge = 27
myAge++

console.log(`Since today is my birthday, I am ${myAge} years of old`)

