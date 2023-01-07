const Engineer = require("../lib/Engineer");
const test = new Engineer("Paul", 36, "pawel@gmail.com", "pawelcodes@github.io");

describe("Engineer class", () => {

    describe("Create New Engineer", () => {
        it("should create a new engineer object", () => {
            expect(test.github).toEqual("pawelcodes@github.io");
        })
    });

    describe("getGit method", () => {
        it("should return the github profile of engineer", () => {           
            expect(test.getGit()).toEqual("pawelcodes@github.io");
        });
    });

    describe("getRole method", () => {
        it("should return the role 'Engineer'", () => {          
            expect(test.getRole()).toEqual("Engineer");
        });
    });
});