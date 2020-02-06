const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github, url) {
        super(name, id, email)
        this.title = "Engineer"
        this.github = github
        this.url = url
    }

    getGithub() {
        return this.github
    }

}

module.exports = Engineer