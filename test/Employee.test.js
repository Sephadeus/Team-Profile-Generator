const Employee = require("../lib/Employee");

describe("Employee class", () => {

    describe("Create New Employee", () => {
        it("should create a new employee object", () => {
            const employee = new Employee("John", 89, "johnnyBravo@gmail.com");

            expect(employee.name).toBe("John");
            expect(employee.id).toBe(89);
            expect(employee.email).toBe("johnnyBravo@gmail.com");
        })
    })

    describe("getRole method", () => {
        it("should return the role 'employee'", () => {
            const employee = new Employee("John", 89, "johnnyBravo@gmail.com");
            
            expect(employee.getRole).toBe("employee");
        });
    });
});


