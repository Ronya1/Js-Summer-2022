/* let operatingSystems = ['windows 11', 'Mac OS Monterey', 'ubuntu','Fedora Linux', 'Arch Linux'];
//console.log(operatingSystems)
// Task instert 'deepin' in index-2 and provide index of where it was inserted 

operatingSystems.splice(2,0,'deepin'),
console.log(operatingSystems);


// TASK 2: Multiply of numbers from 0-10 incrementing by 2 

multiplicationNumber = [2,4,6,8,10]
for (let i = 0 ; i <= multiplicationNumber.length-1 ; i++) {
    console.log(`${multiplicationNumber[i]} * 2`);
} */


// Task 3: Create an array with fruits and title case them -> array created using for()
let fruits = ['Apple', 'Oranges', 'Pineapple', 'Banana', 'pear']
let titleCase = '';
for (i = 0 ; i <= fruits.length-1 ; i++) {
    titleCase = titleCase + ' ' + fruits[i].substring(0).toLowerCase();
}
console.log(titleCase)

// Convert to string 
let fruitsString = fruits.toString()
console.log(fruitsString)

let lengthOfArr_stri = fruitsString.localeCompare(titleCase)
console.log(lengthOfArr_stri)

// getting length of string and Array -> then compare them. 
let titleCase_L = titleCase.length
let stringLength = fruitsString.length
console.log(titleCase_L)
console.log(stringLength)

let codeCompare = titleCase_L === stringLength
console.log(codeCompare)




// create array of veggies -> alfalfa insert between tomato and cucumber 
let veggies1 = ['lettuce', 'tomato', 'cucumber', 'carrot', 'onion'];
// let veggies_String = veggies1.toString()

let veggies2 = veggies1.splice(2,0,'alfalfa');
console.log(veggies2)
console.log(veggies1)

let veggies3 = veggies1.unshift('alfalfa')
console.log(veggies3)
console.log(veggies1)

console.log('BREAK')
let veggies4 = veggies1.concat('alfalfa')
console.log(veggies1)

let veggies5 = veggies1.push('corn')
console.log(veggies1)

/* console.log(`THIS IS A BREAK`)
// from array print all value which start with c 
let veg1_str = veggies1.toString().toUpperCase()
let veggies_C = '';
for (i = 0 ; i <= veg1_str.length-1 ; i++) {
    veggies_C = veggies_C + veg1_str[i].substring(0,1) ;
    console.log(veggies_C);
}
 */
/**
 * 1. find veggies starting with c store and store them in the veggies_C variable
 * 2. convert the array into string and use ChartAt or startswith / substring
 * 3. 
 */

// console.log(veggies_C)

console.log(`THIS IS A BREAK`)
// from array print all value which start with c 
//let veggies1 = ['lettuce', 'tomato', 'cucumber', 'carrot', 'onion'];
let veg1_str = veggies1.toString().toUpperCase()
let veggies_C = '';
for (let i = 0 ; i <= veg1_str.length-1 ; i++) {
    veggies_C = veggies_C + veg1_str[i].charAt(0);
    console.log(veg1_str[i]);
} if (veggies_C.includes('C')){
    console.log(veggies_C);
} else {
    console.log('nothing')
}

//console.log(veggies_C)