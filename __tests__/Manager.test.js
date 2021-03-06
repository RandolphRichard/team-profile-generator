const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number", () => {
  const testValue = 500;
  const e = new Manager("Frank", 1, "test@manager.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Frank", 1, "test@manager.com", 500);
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get office number from getOffice()", () => {
    const testValue = 500;
    const e = new Manager("Frank", 1, "test@manager.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });