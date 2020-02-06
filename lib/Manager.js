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
        <div class="card green z-depth-1">
            <div class="card-content white-text">
            <h4 class="">${this.title}</h4>
            <h5 class="left-align">${this.name}</h5>
            <h5 class="left-align">ID: ${this.id}</h5>
            <h5 class="left-align">Email: ${this.email}</h5>
            <h5 class="left-align">Office Number: ${this.officeNumber}</h5>
        </div>
        </div>
    </div>`


        return card
    }
}


module.exports = Manager