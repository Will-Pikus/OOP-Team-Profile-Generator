const Employee = require("./Employee");

// Engineer constructor
class Engineer extends Employee {
    constructor(name, idd, email, github){
        super(name, id, email);

        this.github = github;
    }

    // get github fucntion
    getGithub(){
        return this.github;
    }

    // get Role - overridden to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;