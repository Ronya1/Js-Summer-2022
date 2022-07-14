// Due date: Fri (Jul 15) eod

/**
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-c : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * 
 * studentScore = 40
 * maxScore = 50
 * 
 * Grade -> C
 */
/**
 * HOW WOULD YOU SOLVE THIS? 
 * 1. set your variables student score and expected score 
 * 2. create a variable for grading formula to convert the grade out of 100 points 
 * 3. if grade formual >=91 and <= 100 give score A else if etc. 
 * 4. If grade formula is < 0 and > 100 print "Invalid student score"
 */
let studentScore = 40
let maxScore = 50
let gradeFormula = (studentScore / maxScore * 100 )
if (gradeFormula >= 91 && gradeFormula <= 100) {
    console.log("A")
} else if (gradeFormula >= 81 && gradeFormula <= 90.99) {
    console.log("B")
} else if (gradeFormula >= 71 && gradeFormula <= 80.99) {
    console.log("C")
} else if (gradeFormula >= 61 && gradeFormula <= 70.9) {
    console.log("D")
} else if (gradeFormula >= 51 && gradeFormula <= 60.99) {
    console.log("E")
} else if (gradeFormula < 51) {
    console.log("F")
} else (gradeFormula < 0 && gradeFormula > 100) 
    console.log("Invalid student score")



/**
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 19
 * 
 * 
 */
// The problem is if the number is divisible by both 5 and 3 how do I get the correct output
// value to print if the number is 15 then I should get the third if else "divisible by 5 and 3"
// Start with the hardest condition first
let myNumber = 19
if ((myNumber%5 === 0) && (myNumber%3 === 0)) {
    console.log('divisible by 5 and 3')
} else if (myNumber%5 === 0) {
    console.log("divisible by 5")
} else if (myNumber%3 === 0) {
    console.log('divisible by 3')
} else {
    console.log(myNumber)
}


/**
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */
/**
 * HOW DO I SOLVE THIS?
 * 1. create planets variable 
 * 2. create another variable to find the index of 'Earth' using index of
 * 3. then compare the is earth present variable at index 0 if true then "Earth is mentioned in expected index"
 * 4. if not present at index 0 default set to planets.unshift which will add the Earth value to array at index 0
 * 5. console.log the final statement of planets 
 */
// MY CODE BELOW 
let planets = ['Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
let isEarthPresent = planets.indexOf('Earth')
// let earthNotPresent = planets.unshift('Earth')
console.log(isEarthPresent) // Earth is present at index 0
// Use the switch method -> No point in doing it this way If else is better
switch(isEarthPresent) {
    case 0:
        console.log("Switch Method -> Earth is mentioned in expected index");
        break;
    default: console.log(`switch method -> ${planets.unshift('Earth')}`)
} 
console.log(planets)


// 'not present'
// If Else Method 
if (planets.indexOf('Earth') === 0) {
    console.log('If else -> Earth is mentioned in expected index')
} else {
    console.log(planets.unshift('Earth'))
}
console.log(planets)

/**
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.
 * 
 */
/**
 * HOW WOULD I SOLVE THIS? 
 * Find if BASKETBALL is present in index-2 using .indexOf === 2 
 *      if true print "BASKETBALL is present at index-2"
 * Find if BASKETBALL is present in the string using .includes()
 *      If ture print "BASKETBALL is mentioned in the sports array"
 * If BASKETBALL is not present at index-2 use the .splice(arg1,arg2,arg3)
 */

 const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 const ind_2 = sports[2]
 if (sports.indexOf('BASKETBALL') === 2) {
    console.log("BASKETBALL is present at index-2")
} else if (sports.includes('BASKETBALL')){
    console.log('BASKETBALL is mentioned in the sports array')
} else if (sports.splice(2,0,'BASKETBALL')) {
        console.log(ind_2) // when replacing value in array the instruction was to print the 
        //value which was replaced therefore if Basketball was not in Array, baseball would be at index-2 and would.
        // have been repalced   
} else {
    console.log('complete')
}
