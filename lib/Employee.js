// Employee constructor
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    // Get Name Function
    getName(){
        return this.name;
    }

    // Get ID Function
    getID(){
        return this.id;
    }

    // Get Email Fucntion
    getEmail(){
        return this.email;
    }

    // Get Role - returns 'Employee'
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;