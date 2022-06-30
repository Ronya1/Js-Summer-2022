/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Due Date: Jul-3 EOD
 * 
 */


// F -> C
// T(°C) = (T(°F) - 32) × 5/9
let fTemp1 = 90;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let fTemp2 = 56;
let kTemp1 = (fTemp2 + 459.67) * 5/9;
console.log(`${fTemp2}°F is equals to ${kTemp1} degrees K`);

// C -> F
// T(°F) = T(°C) × 9/5 + 32
let cTemp3 = 40
let fTemp3 = (cTemp3 * 9/5 +32)
console.log(`${cTemp3}°C is equals to ${fTemp3}°F`);

// C -> K
// T(K) = T(°C) + 273.15
let cTemp4 = 25
let kTemp2 = (cTemp4 + 273.15)
console.log(`${cTemp4}°C is equals to ${kTemp2}°F`)

// K -> F
// T(°F) = T(K) × 9/5 - 459.67
let kTemp3 = 20;
let fTemp4 =(kTemp3 *9/5 - 459.67)
console.log(`${kTemp3}°K is equals to ${fTemp4}°F`)

// K -> C
// T(°C) = T(K) - 273.15
let kTemp4 = 17
let cTemp5 = (kTemp4 - 273.15)
console.log(`${kTemp4}°K is equals to ${cTemp5}`)
