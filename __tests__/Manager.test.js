const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number", () => {
  const testValue = 500;
  const e = new Manager("Frank", 1, "test@manager.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});