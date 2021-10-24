const Intern = require("../lib/Intern");

test("Can set intership", () => {
  const testValue = "OttawaU";
  const e = new Intern("Frank", 1, "test@intern.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Frank", 1, "test@intern.com", "OttawaU");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get school from getSchool()", () => {
    const testValue = "OttawaU";
    const e = new Intern("Frank", 1, "test@intern.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });