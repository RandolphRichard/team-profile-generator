const Engineer = require("../lib/Engineer");

test("Can set GitHub account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Frank", 1, "test@engineer.com", testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
    const testValue = "Engineer";
    const e = new Engineer("Frank", 1, "test@engineer.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get GitHub username from getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Frank", 1, "test@engineer.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });