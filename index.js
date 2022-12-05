const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ projectName, description, install, usage, contrGuidelines, testing }) =>
  `# ${projectName}

## Description
${description}

## Install
${install}

## Usage
${usage}

## Contribution Guidelines
${contrGuidelines}

##Testing Instructions
${testing}

`;

inquirer
  .prompt{
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
        message: ,
      },
    ]
}