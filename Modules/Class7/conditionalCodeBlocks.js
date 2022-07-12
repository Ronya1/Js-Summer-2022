/**
 * get soy milk if its not expiring within 7 days 
 *      if true then buy 2 soy milk
 *      and buy 1 bread 
 * otherwise check for almond milk
 *      buy 1 almond milk
 * otherwise check for regular milk and not expiring in 3 days
 *      buy regular milk 
 * otherwise 
 *      call home 
 * 
 * isSoyMilkPresent && isSoyMilkExpiring > 7 days -> if this is fales 
 *      buy 2 soy milk
 *      buy 1 bread 
 * isAlmondMilkPresent
 *      buy 1 almond milk
 * 
 * 
 * isSoyMilkPresent && isSoyMilkExpiring > 7 days -> if this is fales 
 *      buy 2 soy milk
 *      buy 1 bread 
 * isAlmondMilkPresent -> false
 *      buy 1 almond milk
 * 
 * isSoyMilkPresent && isSoyMilkExpiring > 7 days -> if this is fales 
 *      buy 2 soy milk
 *      buy 1 bread 
 * isAlmondMilkPresent -> false
 *      buy 1 almond milk
 * isRegularMilkPresent && isRegularMilkExpiration > 7
 *      buy regular milk
 * 
 * * isSoyMilkPresent && isSoyMilkExpiring > 7 days -> if this is fales 
 *      buy 2 soy milk
 *      buy 1 bread 
 * isAlmondMilkPresent -> false
 *      buy 1 almond milk
 * isRegularMilkPresent && isRegularMilkExpiration > 7
 *      buy regular milk
 * If all the above conditions are false 
 *      call home
 * 
 */

/**
 * get soy milk if its not expiring within 7 days 
 *      if true then buy 2 soy milk
 *      and buy 1 bread 
 * check time if past 12
 *      say good afternoon
 * 
 * 
 * isSoyMilkPresent && isSoyMilkExpiring > 7 days -> if this is fales 
 *      buy 2 soy milk
 *      buy 1 bread 
 * time >= 12 
 *      say "good Afternoon"
 * 
 */

/**
 * 
 * mon, thur and there is no meeting 
 *      work from home 
 * other weekdays or there is meeting 
 *      work from office 
 * weekends
 *      enjoy
 * 
 * var dayName = '';
 * var isMeeting = true/false;
 * 
 * 
 * ('dayName === 'Mon' or dayName === "Thur") && isMeeting !== true // (can write it cleaner like this store the boolean value in a variable)
 *      I can work from home 
 * ('dayName ===Tues or dayName === Wed or dayName === 'Fri") or isMeeting === true
 *      I should go to office 
 * dayName === sun or dayName is === Sat'
 *      I must enjoy 
 * otherwise
 *      Incrrect dayName
 * 
 * 
 * 
 */

/**
 * Conditional Colde Blocks (conditional loops)
 * 1. if-else statements 
 * 2. switch block 
 * 
 * 
 * when we have different actions to do (code to execute) depending upon condition(s)
 * 
 * 
 */

var dayName = ''
var isMeeting = true;  // or false 

/**
 * syntax for if-block
 * 
 * if (conditions(s)){
 *      if-block
 *      code will execute if consition(s) result into true
 * }
 * 
 * 
 */

if (2 === 12) {
    console.log('Hello World')
}
let countryName = 'UniTEd StaTEs Of AMEriCa'

/**
 * if country name is united states of america, print the country name in uppercase 
 * 
 * countryName == 'United states of america' (ignore case)
 *      countryName -> lowecase -> 'united states of america'
 *      united states of america -> lowercase -> united states of america 
 *      to compare -> localCompare (cannot ignore cases)
 * 
 * countryName into uppercase
 * if (countryName == 'united states of america')
 * 
 * 
 * 
 */
let countryNameLowercase = countryName.toLowerCase()
let toExpectedCounrtyName = 'united states of america'.toLowerCase()

if (countryNameLowercase.localeCompare(toExpectedCounrtyName) === 0) {
    console.log(countryName.toUpperCase());
} 

/**
 * if country name is united states of america, print the country name in uppercase 
 * if country name is NOTunited states of america, print "You are not USA Citizen" 
 * 
 * countryName == 'United states of america' (ignore case)
 *      countryName -> lowecase -> 'united states of america'
 *      united states of america -> lowercase -> united states of america 
 *      to compare -> localCompare (cannot ignore cases)
 * 
 * countryName into uppercase
 * if (countryName == 'united states of america')
 * 
 */
/**
 * syntax:
 * 
 * if (condition(s)) {
 *      if block
 *      code will execute if condition(s) are true
 * } else {
 *      else block
 *      code will execute if condition(s) result into false
 * }
 */
 countryName = 'UniTEd StaTEs Of AMEriCa'
 countryNameLowercase = countryName.toLowerCase()
if (countryNameLowercase.localeCompare(toExpectedCounrtyName) === 0) {
    console.log(countryName.toUpperCase());
} else {
    console.log(`\nYOU are not USA Citizen`)
}
    



/**
 * 
 * mon, thur and there is no meeting 
 *      work from home 
 * other weekdays or there is meeting 
 *      work from office 
 * weekends
 *      enjoy
 * 
 * var dayName = '';
 * var isMeeting = true/false;
 * 
 * 
 * ('dayName === 'Mon' or dayName === "Thur") && isMeeting !== true // (can write it cleaner like this store the boolean value in a variable)
 *      I can work from home 
 * ('dayName ===Tues or dayName === Wed or dayName === 'Fri") or isMeeting === true
 *      I should go to office 
 * dayName === sun or dayName is === Sat'
 *      I must enjoy 
 * otherwise
 *      Incrrect dayName
 * 
 */
/**
 * if - else if - else block 
 */

 console.log('Before if-else block')

var dayName = 'mon';
var isMeeting = true; // or false

// || means pipes -> you can do as many "else if" as you want but "else" must always be the end. 
if ((dayName === 'mon' || dayName === 'thur') && !isMeeting){
        console.log('I can work from home today ')
} else if((dayName === 'tue' || dayName === 'wed' || dayName === 'fri' || isMeeting)) {
        console.log('I have to go to office today ')
} else if (dayName === 'sat' || dayName === 'sun') {
    console.log('I must enjoy ')
} else {
    console.log('Incorrect dayName')
}

console.log('After if-else block')

const sports = ['football', 'soccer', 'baseball', 'rugby']

// if 'swimming is not mentioned as one of the sports, add in the array
// if its mentioned the index which is present 

/**
 * array includes swimming 
 *      print the index of swimming (using indexOf)
 * else 
 *      use push-function to add swimming in the array
 */

if (sports.includes('swimming')) {
    console.log(sports.indexOf('swimming'));
} else {
    sports.push('swimming');
}

// print sports array ; will swimming be part of sports list
console.log(sports)





/**
 * switch-block
 * 
 * 1. all conditions are related to only 1 variable
 * 2. all conditions are comparing equals 
 * 3. for every block, we must have only 1 condition 
 * 
 * syntax:
 * 
 * switch (num) {
 *      case 2:
 *          case block
 *          code here will execute if num===2
 *          break;          // defines as last line for the case block 
 *      case 5:
 *          case block
 *          code here will execute if num===5
 *          break;          // defines as last line for the case block 
 *      case 15:
 *          case block
 *          code here will execute if num===15
 *          break;          // defines as last line for the case block 
 *      case 10:
 *          case block
 *          code here will execute if num===10
 *          break;          // defines as last line for the case block 
 *       case 20:
 *          case block
 *          code here will execute if num===20
 *          break;          // defines as last line for the case block 
 *      default: 
 *          run this code if num is NOT equal to any above case 
 * }
 * 
 */










