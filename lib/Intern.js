const Employee = require("../lib/Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.title = "Intern"
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getCard() {
        const card = `<div class="col s6 m4 center">
        <div class="card cyan lighten-2 z-depth-1">
            <div class="card-content white-text">
            <h4 class="">${this.name}</h4>
            <h5 class="left-align">${this.title}</h5>
            <h6 class="left-align">ID: ${this.id}</h6>
            <h6 class="left-align">Email: <a href="mailto:${this.email}">${this.email}</a></h6>
            <h6 class="left-align">School: ${this.school}</h6>
        </div>
        </div>
    </div>`

        return card
    }
}

module.exports = Intern