/**
 *  Logical (&&,||,!)
 * 
 * && -> and-operator
 *      All combines conditions must be true to get final result as true 
 *      If any one of the combined conditions are false, final result is false 
 * 
 * || -> or-operator
 *      Any one of the combined conditions has to be true to get final result as true
 *      if all combined conditions are false final result is false. 
 * 
 * ! -> not-operator
 *      MAkes true into false and vice versa 
 * 
 * 
 */

let lvar1 = 10, lvar2 = 20, lvar3 = 30, lvar4 = 40;

/**
 * lvar1 is greater than 1var3 and lvars is not equals to lvar4
 * 
 * lvar1 > 1var3 && lvar2 !== lvar4
 * 
 * false && True
 * 
 * false -> both conditions have to be true in order to get a true 
 * 
 * 
 * age = 20 
 * sate = NY
 * ever gone to school = no
 * 
 * if age is above 21 and live in NY -> college discount is 10 -> wont get discount 
 * 
 * if age is above 21 or live in NY  or should be schoole pastout -> college discount is 10 - Will get discount 
 * 
 */

 lvar1 <= lvar3 && (lvar2 === lvar3 + lvar4) // false 

 /**
  * 10 <= 30 && (20 === 30+40)
  * True && (20 === 70)
  * true && false 
  * false 
  */
console.log(`1res1 -> ${res1}`)

 res1 = lvar3 && (lvar2 === lvar3 + lvar4) 