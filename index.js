const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

const generateREADME = ({ projectName, description, install, usage, contrGuidelines, testing, license, username, email }) =>
  `# ${projectName}

## License
${license}

## Table of Contents
[Description](#description)\
[Install](#install)\
[Usage](#usage)\
[Contributing](#contributing)\
[Tests](#tests)
[Questions](#questions)

## Description
${description}

## Install
${install}

## Usage
${usage}

## Contributing
${contrGuidelines}

## Tests
${testing}

## Questions
This README was created by ${username}, and I am reachable at ${email} for any questions, comments, or concerns regarding this project.
`;

inquirer
  .prompt(
    [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the repo / project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give your project a short description',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What would you like to mention about the installation?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe how this project is meant to be used',
      },
      {
        type: 'input',
        name: 'contrGuidelines',
        message: "Please describe what kind of contribution guidelines there are.",
      },
      {
        type: 'input',
        name: 'testing',
        message: 'What are your instructions for testing this project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license would you like to select?',
        choices: [`MIT`, `Apache 2.0`, `GNU GPL v3`]
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What email would you like to set up for questions regarding the project?',
      },
    ]
  )
  .then((responses) => {
    if (responses.license == `MIT`) {
      responses.license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (responses.license == `Apache 2.0`) {
      responses.license = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (responses.license == `GNU GPL v3`) {
      responses.license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    const readMEContent = generateREADME(responses);


    fs.writeFile('README.md', readMEContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
  });
