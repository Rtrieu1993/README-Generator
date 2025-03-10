// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contributing guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const { title, description, installation, usage, contributing, tests, license, github, email } = data;

  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-blue.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPL 3.0': 'https://img.shields.io/badge/License-GPL%203.0-blue.svg',
    'None': ''
  };
  const badgeUrl = licenseBadges[license];

  const readmeContent = `
# ${title}

![License Badge](${badgeUrl})

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${contributing}

## Tests
${tests}

## Questions
For any questions, please contact [GitHub Profile](https://github.com/${github}) or email at ${email}.
`;

  // Write to README.md
  fs.writeFileSync(fileName, readmeContent, 'utf8');
}

// TODO: Create a function to initialize app
function init() {
  // Prompt user for input using inquirer
  inquirer.prompt(questions).then((answers) => {
    // After gathering input, write the README to file
    writeToFile('README.md', answers);
  });
}

// Function call to initialize app
init();
