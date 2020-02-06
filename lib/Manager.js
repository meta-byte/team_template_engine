const Employee = require("../lib/Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.title = "Manager"
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getCard() {
        const card = `<div class="col s12 center">
        <div class="card cyan lighten-2 z-depth-1">
            <div class="card-content white-text">
            <h4 class="">${this.name}</h4>
            <h5 class="left-align">${this.title}</h5>
            <h6 class="left-align">ID: ${this.id}</h6>
            <h6 class="left-align">Email: <a href="mailto:${this.email}">${this.email}</a></h6>
            <h6 class="left-align">Office Number: ${this.officeNumber}</h6>
        </div>
        </div>
    </div>`


        return card
    }
}


module.exports = Manager