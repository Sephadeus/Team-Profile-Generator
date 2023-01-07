//Defines Employee class, which will serve as the parent class for the others
class Employee {
    //Constructor function for employee takes the name, id, and email values
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    //getName method returns user inputted name for the employee class
    getName() {
        return this.name;
    }

    //getID method returns user inputted id for the employee class
    getID(){
        return this.id;
    }

    //getEmail method returns user inputted email for the employee class
    getEmail(){
        return this.email;
    }

    //getRole method returns "employee"
    getRole() {
        return this.role;
    }
}

module.exports = Employee;