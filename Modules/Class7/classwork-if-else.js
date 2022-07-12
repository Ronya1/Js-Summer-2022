/*
    if name is happy, print "good name"
    if name is joy, print the name and it's length.
                    print "your name is too short"
    if name is john, print name in uppercase
    if name is not from above list, print "you have a different name than we expected"

    myName === 'happy'
        print "good name"
    myName === 'joy'
        print the name and it's length.
        print "your name is too short"
    myName === 'john'
        print name in uppercase
    otherwise
        print "you have a different name than we expected"
*/

console.log('\nProblem - 1\n');

var myName = 'jOhn';

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
   var myName2 = 'Joy';
   const myNameLowercase = myName2.toLowerCase();

   if (myNameLowercase.localeCompare('happy') === 0) {
    console.log('good name')
   } else if (myNameLowercase.localeCompare('joy') === 0) {
    console.log(`name: ${myName2}\nlength: ${myName2.length}\nYour name is too short`)
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

 


// CLASS NOTES BELOW: 
/*
    if name is happy, print "good name"
    if name is joy, print the name and it's length.
                    print "your name is too short"
    if name is john, print name in uppercase
    if name is not from above list, print "you have a different name than we expected"

    myName === 'happy'
        print "good name"
    myName === 'joy'
        print the name and it's length.
        print "your name is too short"
    myName === 'john'
        print name in uppercase
    otherwise
        print "you have a different name than we expected"
*/
console.log('\nProblem - 1\n');

var myName2 = 'jOhn';

console.log('Using if-block');
const myNameLowercase2 = myName.toLowerCase();
if (myNameLowercase2.localeCompare('happy') === 0) {
    console.log('Good name');
} else if (myNameLowercase2.localeCompare('joy') === 0) {
    console.log(`name: ${myName2}\nlength: ${myName2.length}\nYour name is too short`);
} else if (myNameLowercase2.localeCompare('john') === 0) {
    console.log(myName2.toUpperCase());
} else {
    console.log('you have a different name than we expected');
}

console.log('\nUsing switch-block');
switch (myName2.toLowerCase()) {
    case 'happy':       // myName is equals to happy, go into case block
        console.log('Good name');
        break;
    case 'joy':
        console.log(`name: ${myName2}\nlength: ${myName2.length}\nYour name is too short`);
        break;
    case 'john':
        console.log(myName2.toUpperCase());
        break;
    default:
        console.log('you have a different name than we expected');
}

/*
    day
    if day is Mon, monday -> print ("Today is the Technosoft class")
    if day is tue -> print ("Today is self learning day")
    if day is Wed -> print ("Today is the Technosoft class")    
    if day is Thu -> print ("Today is self learning day")
    if day is Fri -> print ("Today is the Technosoft class")
    if day is Sat -> print ("Today is lab session day")
    if day is sun -> print ("No study today")
    Note: if day value is not valid -> print an error saying "Entered day-value is not valid"
    
    User can provide day-name is any form, Mon or MOn or MON or MoN or monday or MonDAy or MONDAY
 */
let weekdayName2 = 'MON'
var AfterUpperDayName2 = weekdayName2.toUpperCase()
if (AfterUpperDayName2.localeCompare('MON') === 0) {
    console.log('Today is the Technosoft Class')
} else if (AfterUpperDayName2.localeCompare('TUE') === 0) {
    console.log('Today is self learning day')
} else if (AfterUpperDayName2.localeCompare('SAT') === 0) {
    console.log('Today is Lab Session Day')
} else if (AfterUpperDayName2.localeCompare('SUN', 'SUDNAY') === 0) {
    console.log('No Study Today')
} else {
    console.log('That is not a valid day of the week')
}

let myDay2 = 'MONDAY'
switch(myDay2.toLowerCase()) {
    case 'mon':
    case 'monday':
    case 'wed':
    case 'wednesday':
    case 'fri':
    case 'friday':
        console.log("Today is the Technosoft class");
        break;
    case 'tue':
    case 'tuesday':
    case 'thu':
    case 'thursday':
        console.log("Today is self learning day");
        break;
    case 'sat':
    case 'saturday':
        console.log("Today is lab session day")
        break;
    case 'sun':
    case 'sunday':
        console.log("No study today")
        break;
    default: console.log('Entered day-value is not valid');
}