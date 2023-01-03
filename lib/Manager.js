//Imports Employee parent class
const Employee = require("./Employee");

//Manager class extends Employee parent class
class Manager extends Employee {

  //Constructor function for manager takes name, id, email, and office number values
  constructor({ name, id, email, officeNumber }) {
    //Inherits name, id, and email from the employee parent class
    super({ name, id, email });

    //Assigns the user inputted value for the office number of this manager to the generated object
    this.officeNumber = officeNumber;

    //Defines role as "manager" for this class
    this.role = "Manager";
  }
  //getOfficeNum method returns user inputted office number of this manager
  getOfficeNum() {
    return this.officeNumber;
  }

  //getRole method returns the role specific to this class
  getRole() {
    return this.role;
  }
}

//Exports manager class
module.exports = Manager;
