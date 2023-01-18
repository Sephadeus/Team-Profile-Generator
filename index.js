const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML.js");
var myTeam = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Your name is required")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Your ID is required")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Your email is required")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log("Your office number is required")
                    return false;
                }
            }
        }
    ]).then(answers => {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        myTeam.push(newManager); 
        // console.log(newManager);
        // console.log(myTeam);
        teamBuilderMenu();
    })
};

const teamBuilderMenu = () => { 
 return inquirer.prompt([
    {
        type: 'list',
        name: 'menu',
        message: 'Select an option from the choices below: ',
        choices: ['Add Engineer', 'Add Intern', 'Build My Team Now!']
    }
 ]).then(userInput => {
    switch(userInput.menu) {
        case 'Add Engineer':
            addEngineer();
            break;
        case 'Add Intern':
            addIntern();
            break;
        default:
            generateTeam();
            break;
    }
 })
}

const addEngineer = () => {
    console.log("Answer the following questions to add a new engineer to your team: ");

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this engineer?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("A name is required")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID of this engineer?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("An ID is required")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of this engineer?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("An email is required")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github profile of this engineer?',
            validate: github => {
                if(github) {
                    return true;
                } else {
                    console.log("A github profile is required")
                    return false;
                }
            }
        }
    ]).then(answers => {
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        myTeam.push(newEngineer);
        // console.log(newEngineer);
        // console.log(myTeam);
        teamBuilderMenu();
    })
};


const addIntern = () => {
    console.log("Answer the following questions to add a new intern to your team: ");
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this intern?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("A name is required")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID of this intern?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("An ID is required")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of this intern?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("An email is required")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school attended by this intern?',
            validate: school => {
                if(school) {
                    return true;
                } else {
                    console.log("A school is required")
                    return false;
                }
            }
        }
    ]).then(answers => {
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        myTeam.push(newIntern);
        // console.log(newIntern);
        // console.log(myTeam);
        teamBuilderMenu();
    })
};

const generateTeam = () => {

console.log(generateHTML(myTeam));


fs.writeFileSync("./dist/myTeam.html", generateHTML(myTeam));
  
return console.log(`
=========================
\nTeam Profiles Built Successfully!
\n========================
`);
}

addManager();

