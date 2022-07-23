/**
 * Advanced Array-functions: 
 * 
 * map()
 * filter()
 * every()
 * findIndex()
 * find()
 * reduce()
 * 
 */




 let siblingNames = ['Deepak', 'Heena', 'Gigi', 'Yuri'];

 console.log(siblingNames);      // ['Deepak', 'Heena', 'Gigi', 'Yuri'];
 
 /**
  * Create code to convert all array-values in uppercase
  */
 
 let convertIntoUppercase = (userName) => userName.toUpperCase();
 
 /**
  * When we need to perform action on every value in the array
  * function -> map()
  * 
  * does NOT change the original array
  * map returns a NEW array of same length of as input-array after performing defined action on every value in the array
  * 
  * 
  * let outputArray = inputArray.map(functionName);
  * 
  */
 
 siblingNames = siblingNames.map(convertIntoUppercase); // best practice is to create the function outside of the .map() function
     // OR
 // siblingNames = siblingNames.map(sName => sName.toUpperCase()); // this is creating the function inside the .map() function 
 
 
 console.log(siblingNames);      // ['DEEPAK', 'HEENA', 'GIGI', 'YURI'];
 
 
 /**
  * When we need to filter values from array into new-array based on condition(s)
  * function -> filter()
  * 
  * ['DEEPAK', 'HEENA', 'GIGI', 'YURI'];
  * 
  * keep values which contains 'A' in siblingNames
  * 
  * 
  * ['DEEPAK', 'HEENA'];
  */
 console.log('\nfilter() function\n');
 
 let nameContainsA = userName => userName.includes('A');
 
 let siblingNamesWithA = siblingNames.filter(nameContainsA);
 
 console.log(siblingNamesWithA);      // ['DEEPAK', 'HEENA'];
 
 
 const numbers = [56, 3, -1, 4, 6, 7];
 
 // remove values which are less then 5 from numbers-array
 
 let numbersGr5 = numbers.filter(num => num > 5);
 
 console.log(numbersGr5);
 
 
 /**
  * To find if EVERY values of array passes specified condition(s)
  * function -> every()
  * 
  * if all values pass the specified condition(s) 
  *      function returns true
  * otherwise
  *      function returns false
  * 
  */
 // const numbers = [56, 3, -1, 4, 6, 7];
 // check if all values are greater than 0
 
 console.log('\nevery() function\n');
 let isAllGr5 = numbers.every(num => num>0);
 
 console.log(isAllGr5);
 
 /**
  * To find which value at which index passes condition(s) in the array
  * function -> findIndex()
  * 
  * returns the first index of array which passes the specified condition(s)
  */
 console.log('\nfindIndex() function\n');
 const numbers1 = [5, 6, 3, -1, 4, 6, 7];
 
 // find the first value in the array which is greater than 5
 let firstIndexPassesCondition = numbers1.findIndex(num => num > 5);
 
 console.log(firstIndexPassesCondition); // result will be 1 for index 1 
 
 console.log(numbers1[firstIndexPassesCondition]); // result will be the number 6 
 
 
 /**
  * To find first value which passes specified condition(s) in the array
  * function -> find()
  * 
  * if any array-element passes the condition(s)
  *      function will return the element
  * otherwise
  *      function returns undefined
  * 
  * returns the first array-value which passes the specified condition(s)
  */
 console.log('\nfind() function\n');
 let citizens = [
     {ssn:1111, age:12, state:'PA'}, 
     {ssn:2222, age:22, state:'NY'}, 
     {ssn:3333, age:21, state:'NJ'}, 
     {ssn:4444, age:12, state:'CA'}
 ];
 
 // Create the variable -> create the new variable -> select the variable you want to search -> then .forTheDrillDown -> must be "xyz condition"
 const myCitizen = citizens.find(citizen => citizen.ssn === 3333 || citizen.state === 'NY'); // will print the NY line 2 as 
 //it searched and that was the 1st one that met the conditions line 3 did not execute because it was an or statement ||
 
 console.log(myCitizen);
 
 /**
  * To execute a function on every array-element to produce a single value
  * function -> reduce()
  */ 
 console.log('\nreduce() function\n');
 const numbersAgain = [5, 6, 3, -1, 4, 6, 7];
 
 const totalOf_numbersAgain = numbersAgain.reduce((total, num) => total + num);
 /*
     total = 5
     num = 6
         total = 11
 
     total = 11
     num=3
         total = 14
     
     total = 14
     num = -1
         total = 13
 
     total = 13
     num = 4
         total = 17
 */
 
 console.log(totalOf_numbersAgain);
 
 
 let bankAccounts = [
     {accNum:1111, amt:12}, 
     {accNum:2222, amt:22}, 
     {accNum:3333, amt:21}, 
     {accNum:4444, amt:12}
 ];