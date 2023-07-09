const inquirer = require('inquirer');
const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('README file created successfully!');
    });
  }

  function init() {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the application',
      },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Provide guidelines for contributions',
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Provide test instructions',
      },
    {
      type: 'list',
      message: 'Select a Licence',
      name: 'license',
      choices: ['sample1', 'sample2', 'sample3'],
    },
  ])
  .then((data) => {
    const fileName = 'README.md';
    const readmeContent = generateReadmeContent(data);
    writeToFile(fileName, readmeContent);
  });
  }

  function generateReadmeContent(data) {
    const { name, description, license, installation, usage, contributions, testing } = data;

     // Generate the badge markup based on the selected license
     const licenseBadgeUrl = `https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue`;
  
  
    // Generate the README content based on the collected data
    const readmeContent = `# ${name}\n\n` +
    `## Description\n\n${description}\n\n` +
    `## License\n\n[![License](${licenseBadgeUrl})](${licenseBadgeUrl})\n\n` +
    `This application is licensed under the ${license} license.\n\n` +
    `## Installation\n\n${installation}\n\n` +
    `## Usage\n\n${usage}\n\n` +
    `## Contribution Guidelines\n\n${contributions}\n\n` +
    `## Test Instructions\n\n${testing}`;

  
    return readmeContent;
  }
  
  init();

