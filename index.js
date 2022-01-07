const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamGenerator = require("./src/teamGenerator");

let employees = [];

function creationMenu(){
    function createManager(){
        console.log("Welcome to Team Generator");
        console.log("--------------------------");
        console.log("Proceed to build your team");

        inquirer
            .prompt([
                {
                    type:"input",
                    name:"name",
                    message:"Input manager name"
                },
                {
                    type:"input",
                    name:"id",
                    message:"Input manager ID"
                },
                {
                    type:"input",
                    name:"email",
                    message:"Input manager email"
                },
                {
                    type:"input",
                    name:"officeNumber",
                    message:"Input manager office number"
                },
            ])
            .then((input) => {
                let manager = new Manager(
                    input.name,
                    input.id,
                    input.email,
                    input.officeNumber
                );
                employees.push(manager);
                createTeamMembers();
            });
    }

    function createTeamMembers(){
        inquirer
            .prompt([
                {
                    type:"list",
                    name:"employeeType",
                    message:"Select employee type or exit",
                    choices:["Engineer", "Intern", "Exit"]
                }
            ])
            .then((userInput) =>{
                switch(userInput.employeeType){
                    case "Engineer":
                        createEngineer();
                        break;
                    case "Intern":
                        createIntern();
                        break;
                    default:
                        generateTeamPage();
                }
            });
    }

    function createEngineer(){
        inquirer
            .prompt([
                {
                    type:"input",
                    name:"name",
                    message:"Input engineer name"
                },
                {
                    type:"input",
                    name:"id",
                    message:"Input engineer ID"
                },
                {
                    type:"input",
                    name:"email",
                    message:"Input engineer email"
                },
                {
                    type:"input",
                    name:"github",
                    message:"Input engineer github username"
                },
            ])
            .then((input) =>{
                let engineer = new Engineer(
                    input.name,
                    input.id,
                    input.email,
                    input.github
                );
                employees.push(engineer);
                createTeamMembers();
            });
    }

    function createIntern(){
        inquirer
            .prompt([
                {
                    type:"input",
                    name:"name",
                    message:"Input intern name"
                },
                {
                    type:"input",
                    name:"id",
                    message:"Input intern ID"
                },
                {
                    type:"input",
                    name:"email",
                    message:"Input intern email"
                },
                {
                    type:"input",
                    name:"school",
                    message:"Input intern school"
                },
            ])
            .then((input) =>{
                let intern = new Intern(
                    input.name,
                    input.id,
                    input.email,
                    input.school
                );
                employees.push(intern);
                createTeamMembers();
            });
    }

    function generateTeamPage(){
        fs.writeFileSync("./dist/teampage.html", teamGenerator(employees), 'utf-8');
    }

    createManager();
}

creationMenu();
