const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const RESULT_MKDIR = path.resolve(__dirname, "result");
const resultPath = path.join(RESULT_MKDIR, "team.html");

const create = require("./lib/htmlCreator");

const questions = require("./questions");

const members = [];

function manager() {
  inquirer.prompt(questions.managerQuestions).then((answers) => {
    const managerQuestions = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );

    members.push(managerQuestions);
    generateTeam();
  });
}

function engineer() {
  inquirer.prompt(questions.engineerQuestions).then((answers) => {
    const engineerQuestions = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    members.push(engineerQuestions);
    generateTeam();
  });
}

function intern() {
  inquirer.prompt(questions.internQuestions).then((answers) => {
    const internQuestions = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    members.push(internQuestions);
    generateTeam();
  });
}

function buildTeam() {
  fs.writeFileSync(resultPath, create(members), "utf-8");
}

function generateTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "Would you be interested to add another teammate?",
        choices: ["Engineer", "Intern", "No, Create Team profile"],
      },
    ])
    .then((answers) => {
      if (answers.choices === "Intern") {
        intern();
      } else if (answers.choices === "Engineer") {
        engineer();
      } else {
        buildTeam();
      }
    });
}

manager();
