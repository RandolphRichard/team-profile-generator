const Employee = require("../lib/Employee");

test("Can set employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name", () => {
  const name = "Randolph";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id", () => {
  const testValue = 500;
  const e = new Employee("Frank", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email", () => {
  const testValue = "test@employee.com";
  const e = new Employee("Frank", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Randolph";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 500;
  const e = new Employee("Frank", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@employee.com";
  const e = new Employee("Frank", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Randolph", 1, "test@employee.com");
  expect(e.getRole()).toBe(testValue);
});