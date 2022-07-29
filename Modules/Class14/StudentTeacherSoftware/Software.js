const Members = require('./Members');
const Students = require('./Students');
const Teachers = require('./Teachers');

const s1 = new Students('jOHn', 20, 'USA', 'mobile');
/*
    idValue = 0
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s1.enrollment('jOHn', 20, 'USA', 'mobile');
/*
        idValue = 1
        student = {
        sName : 'john',
        sAge : 20,
        sCountry : 'USA',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : 'Mobile',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

s1.showMyDetails();


const s2 = new Students('Gigi', 20, 'USA', 'QA');
/*
    idValue = 0;
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s2.enrollment('Gigi', 20, 'USA', 'QA');


s2.showMyDetails();


const s3 = new Students('kiAN', 21, 'uSa', 'moBiLE');

s3.showMyDetails();

s1.ChangeCourse('Mobile');
console.log(`\n\n\n`);
//s1.showMyDetails();

// Testing Payment Function 
s1.makePayment(1500)
//s1.showMyDetails();
//s1.makePayment(10)
//s1.showMyDetails();

console.log(`\n\n\n`);
console.log(`hello`)

const t1 = new Teachers();
t1.teacherHired('John', 22, 'USA', "potato");

//t1.validateCourse('mobile');

//t1.isCourseValid('mobile');
//t1.showMyDetails();
