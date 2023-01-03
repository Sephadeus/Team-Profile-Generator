//Imports Employee parent class
const Employee = require("./Employee");

//Engineer class extends Employee parent class
class Engineer extends Employee {

  //Constructor function for engineer takes name, id, email, and github values
  constructor({ name, id, email, github }) {
    //Inherits name, id, and email from the employee parent class
    super({ name, id, email });

    //Assigns the user inputted value for the github profile of this engineer 
    this.github = github;

    //Defines role as "engineer" for this class
    this.role = "Engineer";
  }
  //getGit method returns URL for the github profile of this engineer
  getGit() {
    return this.github;
  }

  //getRole method returns the role specific to this class
  getRole() {
    return this.role;
  }
}

//Exports engineer class
module.exports = Engineer;


