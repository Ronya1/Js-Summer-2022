/**
 * to find if the string ends with the exact given pattern 
 * function: endsWith()
 * input: just one input 
 *      string 
 * return type:
 *      boolean 
 * 
 * if string ends with a given patterm
 *      method returns true (boolean)
 *  otherwise 
 *      method returns false 
 * 
 * 
 * */

 let cityName = 'New YOrK ciTy';

 let cityNameEndsWith_ty = cityName.endsWith('ty');
 console.log(`\ncityName -> ${cityName}`);
 console.log(`is ${cityName} ends with 'ty' : ${cityNameEndsWith_ty}`);
 
 let cityNameEndsWith_ciT = cityName.endsWith('ciT');
 console.log(`is ${cityName} ends with 'ciT' : ${cityNameEndsWith_ciT}`);
 
 let cityNameEndsWith_K_ciTy = cityName.endsWith('K ciTy');
 console.log(`is ${cityName} ends with 'K ciTy' : ${cityNameEndsWith_K_ciTy}`);


/** 
To find a given pattern exactly present in the sting  
function: includes()
input: just one input 
 *      string 
 * return type:
 *      boolean 

If the given pattern is exactly present in the string 
    method returns true 
Otherwise 
    method returns false
*/

// let cityName = 'New YOrK ciTy';
let cityNameIncludes_rK_ci = cityName.includes('rK ci');
console.log(`\ncityName -> ${cityName}`);
console.log(`is ${cityName} contains with 'rK ci' : ${cityNameIncludes_rK_ci}`);

/**
 * To replace a given patterns from string with another pattern or value 
 * function: replace()
 * 
 * input: 2 string values 
 *      (replaceThis, replacewith)
 * return type:
 *      string 
 * 
 * -> replace() method does NOT change the original value in the variable 
 * -> repalce() method replaces the data and returns NEW string 
 * -> by default, replaces only the first occurance. 
 * -> by default, replace is case sensitive 
 * 
 * to repalce all occurances do /sfsdf/g - g stands for global 
 * to replace all occurances no matter the case sensitivity do /sfsdf/gi - i stands for all no matter the case 
 * 
 */

 let sentence = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 let sentence_Replace_a_Z = sentence.replace('a', 'Z');
 console.log(`\nsentence -> ${sentence}`);
 console.log(`sentence_Replace_a_Z -> ${sentence_Replace_a_Z}`);
 
 let sentence_Replace_All_a_Z = sentence.replace(/a/g, 'Z');
 console.log(`sentence_Replace_All_a_Z -> ${sentence_Replace_All_a_Z}`);
 
 // replace all a/A with Z
 let sentence_Replace_All_a_Z_IgnoreCase = sentence.replace(/a/gi, 'Z');
 console.log(`sentence_Replace_All_a_Z_IgnoreCase -> ${sentence_Replace_All_a_Z_IgnoreCase}`);

/**
 * To join two or more stings 
 * function: concat()
 * 
 */
 let str1 = 'Hello', str2=' ', str3 = 'World', str4='!';

let str = str1 + str2 + str3 + str4; // if you try to join strings like this you get "Hello World!" 
console.log(str);

let strr = str1.concat(str2,str3,str4) // you can join them like this also which is easier 
console.log(strr);

/**
 * To remove extra spaces from the string 
 *      before the first character of a string 
 *      and, after the last character of the string 
 *      by default it only checks before the first letter and after the last it doesnt check inbetween
 * function: trim() -> 
 * 
 * Trim function does NOT change the original value in the variable
 * 
 * `Hello    world   have   a   nice day.'
 * `       Hello    world   have   a   nice day.` -> with the above it function it will look like this 'Hello    world   have   a   nice day'
 * 
 * 'Hello   sWorld  hav    a   good day.'      ->  'Hello   sWorld  hav    a   good day.'
 * 
 *  '       Hello   sWorld  hav    a   good day.'  -> 'Hello   sWorld  hav    a   good day.'
 *  
 *  'Hello   sWorld  hav    a   good day.      '    -> 'Hello   sWorld  hav    a   good day.'
 * 
 *  '     Hello   sWorld  hav    a   good day.        ' -> 'Hello   sWorld  hav    a   good day.'
 * 
 */

 let sent = '     Hello   sWorld  hav    a   good day.        ';

 let sent_AfterTrim = sent.trim();
// sent = sent.trim()

console.log('\n*'.concat(sent, '*'));     // *     Hello   sWorld  hav    a   good day.        *

console.log('*'.concat(sent_AfterTrim, '*'));   // *Hello   sWorld  hav    a   good day.*

/**
 * To increase length of the string by adding given character 
 * function: 
 *      padStart() -> adds padding in the beginning 
 *      padEnd() -> adds padding in the end 
 */
/**
 * padStart() -> adds padding in the beginning to increase the length of string 
 * 
 * input: 2 inputs 
 *      1.) number : the length of string after padding 
 *      2.) string: which character we would like to use for padding 
 * return type: 
 *      string : string after padding 
 * 
 * 
 * Hello 
 * padStart(7,`*`)
 * result would be **Hello
 * 
 * Hello 
 * padStart(4,`*`)
 * result would be **Hello -> becuase the length is already more then 4 so it gives same result
 * 
 */
let padString = `Hello`
let padString_AfterPadding = padString.padStart(7, '*');

console.log(`\npadString -> ${padString}`);
console.log(`padString_AfterPadding -> ${padString_AfterPadding}`);

let padString_AfterPadding2 = padString.padStart(4,'*');
console.log(`padString_AfterPadding2 -> ${padString_AfterPadding2}`);


/**
 * padEnd() -> adds padding in the end to increase the lenght of the string 
 * 
 * input: 2 inputs 
 *      1.) number : the length of string after padding 
 *      2.) Ending : which character we would like to use for padding 
 * return type: 
 *      string : string after padding 
 * 
 *  * Hello 
 * padEnd(7,`*`)
 * result would be **Hello
 * 
 * Hello 
 * padEnd(4,`*`)
 * result would be **Hello -> becuase the length is already more then 4 so it gives same result
 */

 let padString_AfterPadding_End = padString.padEnd(8, '^&');

 console.log(`\npadString -> ${padString}`);
 console.log(`padString_AfterPadding_End -> ${padString_AfterPadding_End}`);
 
 let padString_AfterPadding_End2 = padString.padStart(4,'*');
 console.log(`padString_AfterPadding_End2 -> ${padString_AfterPadding_End2}`);
 

 /**
  * Hello world 
  * 
  * length = 11 
  * first index is 0
  * last index = 10 
  * 
  * 
  * Happy 
  * Length = 5 
  * first index = 0 
  * last index = 4 
  * 
  * length - 1 is always equal to your last index 
  * 
  * last index is always = to lenght - 1
  * 
  * datatype for index -> number 
  * 
  */

 /**
  * To find the character at any given index 
  * function: charAt()
  * 
  * 
  * input : 1 input
  *         number : index 
  * return type: 
  *         string 
  * 
  */

let mySentence = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
  
// which character is at index-23
let charAt23 = mySentence.charAt(23);
console.log(`\nmySentence -> ${mySentence}`);
console.log(`Character present at index-23 -> ${charAt23}`);

// index is beyond the scope
let charAt200 = mySentence.charAt(200);
console.log(`Character present at index-200 -> ${charAt200}`);

// invalid index value
let charAt_4 = mySentence.charAt(-4); // there is no such thing as a negative value in indexing it would be invalid 
console.log(`Character present at index -4 -> ${charAt_4}`);

/**
 * To find at which index the given pattern (First Occurance) is exactly present in the string.
 * function: indexOf() -> it is case sensative. 
 * 
 * input: 1 input 
 *      String : pattern for which we want to find index 
 * return: 
 *      number: index where the pattern is present 
 * 
 * if the given pattern is exactly present in the string 
 *      method returns the index of the FIRST OCCURANCE of THE starting of the pattern
 * Otherwise 
 *      method returns -1
 * 
 * Datatype: number
 * 
 * Hello World Hello Dear Hello Boss Hello Family
 * indexOf(e)   -> 1
 * 
 * indexOf(E)   -> -1
 * 
 * indexOf(l)   -> 2
 * 
 * indexOf(ell) -> 1
 * 
 * indexOf(rld he) -> -1
 * 
 * indexOf(rld He) -> 
 * 
 * 
 */

 let helloMsgs = 'Hello World Hello Dear Hello Boss Hello Family';
 let indexof_e = helloMsgs.indexOf('e');
 let indexof_E = helloMsgs.indexOf('E');
 let indexof_l = helloMsgs.indexOf('l');
 let indexof_ell = helloMsgs.indexOf('ell');
 let indexof_rld_he = helloMsgs.indexOf('rld he');
 let indexof_rld_He = helloMsgs.indexOf('rld He');
 
 console.log(`\nhelloMegs -> ${helloMsgs}`);
 console.log(`indexof_e -> ${indexof_e}`);
 console.log(`indexof_E -> ${indexof_E}`);
 console.log(`indexof_l -> ${indexof_l}`);
 console.log(`indexof_ell -> ${indexof_ell}`);
 console.log(`indexof_rld_he -> ${indexof_rld_he}`);
 console.log(`indexof_rld_He -> ${indexof_rld_He}`);


/**
 * To find at which index the given pattern (Last  Occurance) is exactly present in the string.
 * function: lastindexOf() -> it is case sensative. 
 * 
 * input: 1 input 
 *      String : pattern for which we want to find index 
 * return: 
 *      number: index where the pattern is present 
 * 
 * if the given pattern is exactly present in the string 
 *      method returns the index of the LAST OCCURANCE of THE starting of the pattern
 * Otherwise 
 *      method returns -1
 * 
 * 
 * Hello World Hello Dear Hello Boss Hello Family
 * lastIndexOf(e)   -> e (in last Hello)
 * 
 * lastIndexOf(E)   -> -1
 * 
 * lastIndexOf(l)   -> l (in family)
 * 
 * lastIndexOf(ell) -> ell (in last Hello)
 * 
 * lastIndexOf(rld he) -> -1
 * 
 * lastIndexOf(rld He) -> 8
 */

 let lastIndexof_e = helloMsgs.lastIndexOf('e');
 let lastIndexof_E = helloMsgs.lastIndexOf('E');
 let lastIndexof_l = helloMsgs.lastIndexOf('l');
 let lastIndexof_ell = helloMsgs.lastIndexOf('ell');
 let lastIndexof_rld_he = helloMsgs.lastIndexOf('rld he');
 let lastIndexof_rld_He = helloMsgs.lastIndexOf('rld He');
 
 console.log(`\nhelloMegs -> ${helloMsgs}`);
 console.log(`lastIndexof_e -> ${lastIndexof_e}`);
 console.log(`lastIndexof_E -> ${lastIndexof_E}`);
 console.log(`lastIndexof_l -> ${lastIndexof_l}`);
 console.log(`lastIndexof_ell -> ${lastIndexof_ell}`);
 console.log(`lastIndexof_rld_he -> ${lastIndexof_rld_he}`);
 console.log(`lastIndexof_rld_He -> ${lastIndexof_rld_He}`);
