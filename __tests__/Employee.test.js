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