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
        <div class="card cyan lighten-2 z-depth-1">
            <div class="card-content white-text">
            <h4 class="">${this.name}</h4>
            <h5 class="left-align">${this.title}</h5>
            <h6 class="left-align">ID: ${this.id}</h6>
            <h6 class="left-align">Email: <a href="mailto:${this.email}">${this.email}</a></h6>
            <h6 class="left-align">Github: <a href="${this.url}" target="_blank">${this.github}</a></h6>
        </div>
        </div>
    </div>`

        return card
    }
}

module.exports = Engineer