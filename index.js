// generate html
const generateHTML = require('./src/generateHTML');

// node modules
const fs = require('fs'); 
const inquirer = require('inquirer');

//classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const teamArray = []; 

// Add manager
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of the team?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number.",
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

// Add employee
const addEmployee = () => {
    console.log(`
    Add employees to the team
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose the employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the employee?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's github username.",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        // determine employee role
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })
};


// function to generate HTML index page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // error response
        if (err) {
            console.log(err);
            return;
        // succesful page creation
        } else {
            console.log("Team created, view index.html in 'dist'")
        }
    })
}; 

// call functions
addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });