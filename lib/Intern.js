const Employee = require('./Employee');

// intern constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); 

        this.school = school; 
    }

    // get School Funciton
    getSchool () {
        return this.school;
    }

    // get Role - overridden to return Intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern;