const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const axios = require("axios")
const inquirer = require("inquirer")
const Questions = require("./lib/questions")
const fs = require("fs")
const util = require("util");
const generateHTML = require("./lib/generateHTML.js")

const writeFileAsync = util.promisify(fs.writeFile)

var team = []


// main function that determines which type of team member should be added
function addMember() {
    inquirer.prompt({
        type: "list",
        message: "Who would you like to add?",
        name: "typeEmployee",
        choices: [
            "Engineer",
            "Intern"
        ]
    })
        .then(function (type) {
            console.log(type.typeEmployee)
            switch (type.typeEmployee) {
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

//asks for confirmation to add another employee. Calls back to run function
function addEmployee() {
    inquirer
        .prompt({
            type: "confirm",
            message: "Would you like to add someone else to this team?",
            name: "addEmployee"
        })
        .then(function (res) {
            if (res.addEmployee != true) {
                inquirer
                    .prompt({
                        type: "input",
                        message: "Please enter a team name.",
                        name: "teamname"
                    })
                    .then(function (res) {
                        console.log("Roster for " + res.teamname + " has been created!")
                        writeHTML(res.teamname)

                    })
            }
            else (
                addMember()
            )
        })
}

//starts program and prompts manager questions
function makeManager() {
    console.log("Please create a manager for this team.")
    inquirer
        .prompt(Questions.managerQuestions)
        .then(function (res) {
            let manager = new Manager(res.name, res.id, res.email, res.officeNumber)
            team.push(manager)
            console.log(res.name + " has been added as a Manager!")
            addMember()
        })
}

//prompts engineer questions and creates an engineer
function makeEngineer() {
    inquirer
        .prompt(Questions.engineerQuestions)
        .then(function (res) {
            const name = res.name
            const id = res.id
            const email = res.email
            const github = res.github
            const queryUrl = `https://api.github.com/users/${res.github}`
            axios.get(queryUrl).then(function (res) {
                var githubUrl = res.data.html_url
                let engineer = new Engineer(name, id, email, github, githubUrl)
                team.push(engineer)
            })
            console.log(res.name + " has been added as an Engineer!")
            addEmployee()
        })
}

//prompts intern questions and creates an intern
function makeIntern() {
    inquirer
        .prompt(Questions.internQuestions)
        .then(function (res) {
            let intern = new Intern(res.name, res.id, res.email, res.school)
            team.push(intern)
            console.log(res.name + "has been added as an Intern!")
            addEmployee()

        })
}

//creates an array of strings with interpolated class data then joins them and calls generate html
function writeHTML(name) {
    let cardsRaw = []
    for (i = 0; i < team.length; i++) {
        card = team[i].getCard()
        cardsRaw.push(card)
        cardsClean = cardsRaw.join("")
    }
    html = generateHTML(cardsClean, name);
    return writeFileAsync("output/team.html", html)



}


makeManager()