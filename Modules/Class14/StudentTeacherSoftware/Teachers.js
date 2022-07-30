//const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");



const teachersCourses = ['QA', 'Automation', 'Mobile']; // must be created outside of the class 

class Teachers  {       // extends Members
    

    static idValue = 0;
    #teacher = {
        tName : '',
        tAge : 0,
        tCountry : '',
        tId : 0,
        tCourseName : '',
        tSalary : 0,
    }

    /**
     * 
     * age >= 21
     * 
     * teacherCourseName should be Automation, QA or Mobile
     * 
     */

    teacherHired(teacherName, teacherAge, teacherCountry, teacherCourse){
        if (teacherAge >= 21 && this.isCourseValid(teacherCourse)){
            this.#teacher.tName = teacherName;
            this.#teacher.tAge =  teacherAge;
            this.#teacher.tCountry = teacherCountry;
            this.#teacher.tCourseName = teacherCourse;
            console.log("hired");
        } else {
            console.log('Not Hired')
        }
    }

    isCourseValid(checkCourse) {
        let result = false;
        for (let i = 0; i <=teachersCourses.length-1; i++) {
            result = teachersCourses[i].toLowerCase().localeCompare(checkCourse.toLowerCase()) === 0
        } 
         if(result){
            console.log('Course is valid')
        } else {
            console.log('Course is not valid')  
        } return result
    }

    /* isCourseValid(checkCourse) {
        let result = false;
        for (let i = 0; i <=teachersCourses.length-1; i++) {
            if (teachersCourses[i].toLowerCase().localeCompare(checkCourse.toLowerCase()) === 0) {
                result = true
            } 
        }
        if(result){
            console.log('Course is valid')
        }
        else{
            console.log('Course is not valid')  
        }
    } */

    showMyDetails() {
      console.log(this.#teacher.tAge);
      console.log(this.#teacher.tName);
      console.log(this.#teacher.tCountry)
      console.log(this.#teacher.tCourseName)
   }

    changeTeachingCourse() {
        // code If current course is not same as new course, update course this.#teachercourse use.find method
    }

    /**
     * addGrade
     * 
     * input: studentId, grade
     * 
     * if studentId is valid and studentGrade is ''
     *      update student.sGrade = grade (always store grade in Uppercase)
     *      print -> grade is successfully added to student id -> id
     * if studentGrade is NOT ''
     *      then print -> remove grade from the student
     * if studentId is invalid
     *      then print -> Invalid student id  
     * 
     */
    addGrade() {
        // code
    }

    /**
     * removeGrade
     * 
     * input: studentId
     * 
     * if studentId is valid and studentGrade is NOT ''
     *      update student.sGrade = ''
     *      print -> grade is successfully removed from student id -> id
     * if studentGrade is ''
     *      then print -> Student has no grade
     * if studentId is invalid
     *      then print -> Invalid student id
     * 
     */
    removeGrade() {
        // code
    }


} module.exports = Teachers;