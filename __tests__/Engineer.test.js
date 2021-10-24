const Engineer = require("../lib/Engineer");

test("Can set GitHub account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Frank", 1, "test@engineer.com", testValue);
  expect(e.github).toBe(testValue);
});