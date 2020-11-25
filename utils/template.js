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