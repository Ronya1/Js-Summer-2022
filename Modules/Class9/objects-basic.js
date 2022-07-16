/**
 *  'Deepak'
 *  'USA'
 *  20
 *  'M'
 *  'paid full'
 */
 let name1 = 'Deepak'
 let country1 = 'USA'
 let age1 = 20;
 let gender1 = 'M'
 let paymentPlan1 = 'Paid in full';
 /*

// an object represents one entity person, place, thing, business. 
// you can have multiple objects in an object

 student1 = {
        name = 'Deepak',
        country = 'USA',
        age = 20,
        gender = 'M',
        paymentPlan = 'Paid in full'
    }

    student2 = {
        name = 'Happy',
        country = 'USA',
        age = 12,
        gender = 'F',
        paymentPlan = 'Paid in full'
    }

    human1 = {
        name = 
        ssn = 
        gender = 
        qualification = 
        state = 
        childrenNames = [human2, human3]
        schools = {
            name = 
            address = 
            studiedUpto = 1-4
        }
    }

    human2 = {
        name = 
        ssn = 
        gender = 
        qualification = 
        state = 
        childrenNames = []
    }

    human3 = {
        name = C
        ssn = 
        gender = 
        qualification = 
        state = 
        childrenNames = []
    }

/**
 * object -> represented by {} and used to store data 
 * 
 * syntax:
 * 
 * let objectName = {
 *      attribute1  : attribute1Value, -> the : is very important Also the , is very important if you want to add more. 
 *      attribute2  : attribute2Value,
 *      attribute3  : attribute3Value -> in the last attribure you must exclude the , as you are saying your done with the object
 * }
 * 
 * -> attribute names has to be unique in the object
 * 
 */


/* let abc [] -> array 
let abc{} -> object */

let myObj = {
    myName : 'Happy Peace',
    age : 20,
    state : 'New York',
    pastJobs : {
        current : 'ABC',
        past1 : 'XYZ',
        past2 : 'DEF'
    },
    siblingNames : ['Deepak', 'Heena', 'Gigi', 'Yuri']
};


// print name myObj - object
console.log('\nPrinting myObj\n');
console.log(myObj);


console.log('\nPrint value of name-attribute in myObj-object\n');
console.log(myObj.myName);          // using dot-operator getting value of attribute
console.log(myObj['myName']);       // using square-operator getting value of attribute

console.log('\nPrint value of pastJobs-past2-attribute in myObj-object\n');
console.log(myObj.pastJobs.past2); // traversing an object within an object. to get the job. Using dot-operator
console.log(myObj['pastJobs']['past2']);          // using square-operator

console.log('\nPrint first value in siblings-attribute in myObj-object\n');
console.log(myObj.siblingNames[0]); // traversing an object within an object. to get the sibling name. Using [] method