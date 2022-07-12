/*
Question 1: 
    if name is happy, print "good name"
    if name is joy, print the name and it's length.
                    print "your name is too short"
    if name is john, print name in uppercase
    if name is not from above list, print "you have a different name than we expected"
*/

let theName = 'John'
if (theName === 'happy') { 
    console.log('good name');
} else if (theName === "joy"){
    console.log(theName.length + "your name is too short");
} else if  (theName === 'John') {
    console.log(theName.toUpperCase());
} else {
    console.log('you have a different name than we expected')
}


   // Using else-if for Q1 
   var myName = 'Joy';
   const myNameLowercase = myName.toLowerCase();

   if (myNameLowercase.localeCompare('happy') === 0) {
    console.log('good name')
   } else if (myNameLowercase.localeCompare('joy') === 0) {
    console.log(`name: ${myName}\nlength: ${myName.length}\nYour name is too short`)
   } else if (myNameLowercase.localeCompare('john') === 0) {
    console.log(myName.toUpperCase());
   } else {
    console.log('your you have a different name than we expected')
   }

   // using switch for Q1 
   switch(myName.toLowerCase()){
    case 'happy':       // myName is equal to happy, go into case block
        console.log('Good name');
        break;
    case 'Joy':      
        console.log(`name: ${myName}\nlength: ${myName.length}\nYour name is too short`);
        break;
    case 'John':       
        console.log(myName.toUpperCase());
        break;
    default:      
        console.log('your you have a different name than we expected');
   }


   // EXERCISE #2 - using switch case 
/**
 * if day is Mon, monday -> print ("Today is the Technosoft class")
    if day is tue -> print ("Today is self learning day")
    if day is Wed -> print ("Today is the Technosoft class")
    if day is Thu -> print ("Today is self learning day")
    if day is Fri -> print ("Today is the Technosoft class")
    if day is Sat -> print ("Today is lab session day")
    if day is sun -> print ("No study today")
    Note: if day value is not valid -> print an error saying "Entered day-value is not valid"
    User can provide day-name is any form, Mon or MOn or MON or MoN or monday or MonDAy or MONDAY
 */
// would you solve this with starts with? substring? 

// How did I mess this up so bad - you should have used substring to pull out the first 3 letters 
let myDay = 'Mon'
    switch(myDay) { 
        case 'Mon':
            console.log("Today is the Technosoft class");
            break;
        case 'Monday':
            console.log("Today is the Technosoft class");
            break;
        case 'tue':
            console.log('Today is self learning day');
            break;
        case 'wed':
            console.log("Today is the Technosoft class");
            break;
         case 'Thu':
            console.log("Today is self learning day");
            break; 
         case 'Fri':
            console.log("Today is the Technosoft class")
            break; 
        case 'sat':
            console.log("Today is lab session day")
            break;
        case 'sun':
            console.log("No study today")
            break;
        default: console.log('Entered day-value is not valid');
    }

// THIS IS THE WAY TO SOLVE THIS 
/**
 * in the switch statement convert everything to lowercase switch(myDay.toLowerCase())
 * Then do mon for one case and monday for another case 
 * put all of the cases together at the top 
 * 
 * COPY THE CODE FROM CLASS BELOW 
 */

 