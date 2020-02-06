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

    getCard() {
        const card = `<div class="col s6 m4 center">
        <div class="card green z-depth-1">
            <div class="card-content white-text">
            <h4 class="">${this.title}</h4>
            <h5 class="left-align">${this.name}</h5>
            <h5 class="left-align">ID: ${this.id}</h5>
            <h5 class="left-align">Email: ${this.email}</h5>
            <h5 class="left-align">Github: ${this.github}</h5>
        </div>
        </div>
    </div>`

        return card
    }
}

module.exports = Engineer