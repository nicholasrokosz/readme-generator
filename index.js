const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer.prompt(questions).then((input) => {
  const mdTemplate = generateMarkdown(input);
  fs.writeFile("README.md", mdTemplate, () => {
    console.log("README created!");
  });
});