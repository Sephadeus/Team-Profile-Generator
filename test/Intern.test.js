const Intern = require("../lib/Intern");
const test = new Intern("Jimmy", 11, "jimbob@gmail.com", "UCONN");

describe("Intern class", () => {

    describe("Create New Intern", () => {
        it("should create a new intern object", () => {
            expect(test.school).toEqual("UCONN");
        })
    });

    describe("getSchool method", () => {
        it("should return the school of intern on record", () => {           
            expect(test.getSchool()).toEqual("UCONN");
        });
    });

    describe("getRole method", () => {
        it("should return the role 'Intern'", () => {          
            expect(test.getRole()).toEqual("Intern");
        });
    });
});