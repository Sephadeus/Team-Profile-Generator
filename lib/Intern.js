//Imports Employee parent class
const Employee = require("./Employee");

//Intern class extends Employee parent class
class Intern extends Employee {

  //Constructor function for intern takes name, id, email, and school values
  constructor({ name, id, email, school }) {
    //Inherits name, id, and email from the employee parent class
    super({ name, id, email });

    //Assigns the user inputted value for the school of this intern to the generated object
    this.school = school;

    //Defines role as "intern" for this class
    this.role = "Intern";
  }
  //getSchool method returns the school attended by this intern
  getSchool() {
    return this.school;
  }

  //getRole method returns the role specific to this class
  getRole() {
    return this.role;
  }
}

//Exports intern class
module.exports = Intern;
