/**
 * 5. Ternary (?:)
 *     Used in situations where one of two values will be assigned to variables depending upon the result of condition(s)
 *     When you have more then 2 values you cannot use Ternary - unlimited oncditions but value can only be 2 
 * 
 * 4.5 , 5.5 or 6 
 * 
 * if credit score is > 700, rate will be 4.5 else 5.5 - 1 Value 
 * 
 * if credit score is > 700 and first time home buyer, rate will be 4.5 else 5.5 - 2 values 
 * 
 * 
 * 
 * syntax:
 * varName = condition(s) ? value-WhichWillBeAssignIfConditionResultIntoTrue : value-WhichWillBeAssignIfConditionResultIntoFalse
 */

// if credit core > 700, rate will be 4.5 else 5.5 

let userCreditScore = 700;
let mortgageRate = userCreditScore > 700 ? 4.5 : 5.5

console.log(`/nCredit Score .-> ${userCreditScore}`)
console.log(`Mortgage Rate .-> ${mortgageRate}`)

let userCreditScore2 = 710;
let isFirstTimeBuyer = true;

let mortgageRate2 = userCreditScore2 > 700 && isFirstTimeBuyer === true ? 4.5 : 5.5;
console.log(`/nCredit Score .-> ${userCreditScore2}`)
console.log(`Credit Score .-> ${isFirstTimeBuyer}`)
console.log(`Mortgage Rate .-> ${mortgageRate2}`)


