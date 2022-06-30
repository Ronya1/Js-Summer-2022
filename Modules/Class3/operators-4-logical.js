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

/**
 * lvar1 is greater than 1var3 and lvars is not equals to lvar4
 * 
 * lvar1 > 1var3 && lvar2 !== lvar4
 * 
 * false && True
 * 
 * false -> both conditions have to be true in order to get a true, if 1 2 false its false, if 1 true 1 false its false 
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

 let lVar1 = 10, lVar2 = 20, lVar3 = 30, lVar4 = 40;

let lRes1 = lVar1 <= lVar3 && (lVar2 === lVar3 + lVar4);     // false
        /*
            10 <= 30 && (20 === 30+40)
            true && (20 === 70)
            true && false
            false
        */
console.log(`lRes1 -> ${lRes1}`);

lRes1 = lVar1 <= lVar3 && !(lVar2 === lVar3 + lVar4); 
        /*
            10 <= 30 && !(20 === 30+40)
            true && !(20 === 70)
            true && !(false)
            true && true
            true
        */
console.log(`lRes1 -> ${lRes1}`);
