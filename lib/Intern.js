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
        <div class="card green z-depth-1">
            <div class="card-content white-text">
            <h4 class="">${this.title}</h4>
            <h5 class="left-align">${this.name}</h5>
            <h5 class="left-align">ID: ${this.id}</h5>
            <h5 class="left-align">Email: ${this.email}</h5>
            <h5 class="left-align">School: ${this.school}</h5>
        </div>
        </div>
    </div>`

        return card
    }
}

module.exports = Intern