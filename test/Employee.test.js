const Employee = require("../lib/Employee");
const test = new Employee("John", 89, "johnnyBravo@gmail.com");

describe("Employee class", () => {

    describe("Create New Employee", () => {
        it("should create a new employee object", () => {
           // const employee = new Employee("John", 89, "johnnyBravo@gmail.com");

            expect(test.name).toEqual("John");
            expect(test.id).toEqual(89);
            expect(test.email).toEqual("johnnyBravo@gmail.com");
        })
    })

    describe("getName method", () => {
        it("should return the employee's name", () => {
           // const employee = new Employee("John", 89, "johnnyBravo@gmail.com");
            
            expect(test.getName()).toEqual("John");
        });
    });

    describe("getID method", () => {
        it("should return the employee ID", () => {
            //const employee = new Employee("John", 89, "johnnyBravo@gmail.com");
            
            expect(test.getID()).toEqual(89);
        });
    });

    describe("getEmail method", () => {
        it("should return the employee's email address", () => {
          //  const employee = new Employee("John", 89, "johnnyBravo@gmail.com");
            
            expect(test.getEmail()).toEqual("johnnyBravo@gmail.com");
        });
    });

    describe("getRole method", () => {
        it("should return the role 'employee'", () => {
          //  const employee = new Employee("John", 89, "johnnyBravo@gmail.com");
            
            expect(test.getRole()).toEqual("Employee");
        });
    });
});


