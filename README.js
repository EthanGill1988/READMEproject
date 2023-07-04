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
      message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a Description of your Application',
      },
    {
      type: 'list',
      message: 'Select a Licence?',
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


