const Employee = require('./Employee');

// manager constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // get Role - overridden to return 'Manager'
    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 