const Manager = require("../lib/Manager");
const test = new Manager("Reginald", 100, "ReggieManages@gmail.com", 123);

describe("Manager class", () => {

    describe("Create New Manager", () => {
        it("should create a new manager object", () => {
            expect(test.officeNumber).toEqual(123);
        })
    });

    describe("getOfficeNum method", () => {
        it("should return the office number of the manager", () => {           
            expect(test.getOfficeNum()).toEqual(123);
        });
    });

    describe("getRole method", () => {
        it("should return the role 'Manager'", () => {          
            expect(test.getRole()).toEqual("Manager");
        });
    });
});