const Intern = require("../lib/Intern");

test("Can set intership", () => {
  const testValue = "OttawaU";
  const e = new Intern("Frank", 1, "test@intern.com", testValue);
  expect(e.school).toBe(testValue);
});