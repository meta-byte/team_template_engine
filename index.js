const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Inquirer = require("Inquirer")
const Questions = require("./lib/questions")




Inquirer
    .prompt(Questions.internQuestions)
    .then(function (answers) {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(manager.getRole())
    })
