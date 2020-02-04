const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Inquirer = require("Inquirer")
const Questions = require("./lib/questions")


var team = []

function run() {
    Inquirer.prompt({
        type: "list",
        message: "Who would you like to add?",
        name: "typeEmployee",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    })
        .then(function (type) {
            console.log(type.typeEmployee)
            switch (type.typeEmployee) {
                case "Manager":
                    makeManager()
                    break;
                case "Engineer":
                    makeEngineer()
                    break;
                case "Intern":
                    makeIntern()
                    break;
                default:
                    break;
            }
        })

}


function addEmployee() {
    Inquirer
        .prompt({
            type: "confirm",
            message: "Would you like to add someone else?",
            name: "addEmployee"
        })
        .then(function (res) {
            if (res.addEmployee != true) {
                console.log("Your team roster has been created!")
            }
            else (
                run()
            )
        })
}

function makeManager() {
    Inquirer
        .prompt(Questions.managerQuestions)
        .then(function (res) {
            let manager = new Manager(res.name, res.id, res.email, res.officeNumber)
            console.log(res.name + " has been added as a Manager!")
            addEmployee()
        })
}

function makeEngineer() {
    Inquirer
        .prompt(Questions.engineerQuestions)
        .then(function (res) {
            let engineer = new Engineer(res.name, res.id, res.email, res.github)
            console.log(res.name + " has been added as an Engineer!")
            addEmployee()
        })
}

function makeIntern() {
    Inquirer
        .prompt(Questions.internQuestions)
        .then(function (res) {
            let intern = new Intern(res.name, res.id, res.email, res.school)
            console.log(res.name + "has been added as an Intern!")
            addEmployee()

        })
}

run()
