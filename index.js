const questions = require("./utils/questions.js");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt(questions).then((input) => {
  const {
    title,
    description,
    installation,
    usage,
    contribution,
    test,
    license,
    github,
    email,
  } = input;

  const mdTemplate = `# ${title}

![License](https://img.shields.io/badge/License-${license}-blue)

## Description 
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## Installation
${installation}


## Usage 
${usage}

## Contributing
${contribution}

## Tests
${test}

## License
${license}

## Questions
GitHub username: ${github}

email: ${email}`;

  fs.writeFile("README.md", mdTemplate, () => {
    console.log("README created!");
  });
});

// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();