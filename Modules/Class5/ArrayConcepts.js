/**
 * [] represent an Array
 * 
 * Array : datatype which can store 1 or more values 
 */

let planets = [`Earth`, `Mercury`, `Venus`, `Jupiter`, `pluto`];
console.log(`\nplanets -> ${planets}`)
console.log(`typeof planets -> ${typeof planets}`)

/**
 * To find the number of values in an Array 
 * property: length 
 * 
 */

 const totalPlanets = planets.length
 console.log(totalPlanets)



/** 
 * Array: values stored using the concept of index.;
 * 
 * first value goes to index-0
 * second value goes to index-1
 * third value goes to index-3
 * and so on 
 * 
 * let planets = [`Earth`, `Mercury`, `Venus`, `Jupiter`, `pluto`]
 * 
 * planets [0] -> represents the value at index-0
 * 
 * planets [n] -> represents the value at index-n
 * 
 * last index of Array = Array length -1
 * 
 */

console.log(planets[0])

planets[1].length // this will give you the length of Mercury as you are pointing to index 1 which is Mercury .length is the length of the string 

// Another example we cannot apply substring, split or the other one here
let data = [11, 22, 33, 44, 55]

data[1]












