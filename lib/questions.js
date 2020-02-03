const managerQuestions = [
    {
        type: "input",
        message: "Enter the Manager's Name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the Manager's ID Number:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the Manager's Email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the Manager's Office Number:",
        name: "officeNumber"
    }
]

const engineerQuestions = [
    {
        type: "input",
        message: "Enter the Engineer's Name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the Engineer's ID Number:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the Engineer's Email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the Engineer's github username:",
        name: "github"
    }
]

const internQuestions = [
    {
        type: "input",
        message: "Enter the Intern's Name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the Intern's ID Number:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the Intern's Email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the Intern's School:",
        name: "school"
    }
]

module.exports = { managerQuestions, engineerQuestions, internQuestions }