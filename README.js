const inquirer = require('inquirer');
const fs = require('fs');
const badge = require('badge-maker');

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
        name: 'description',
        message: 'Provide a Description of your Application',
      },
    {
      type: 'list',
      message: 'Select a Licence?',
      name: 'license',
      choices: ['sample1', 'sample2', 'sample3'],
      label: 'build',
      message: 'message',
      labelColor: '#555',
      color:'#4c1',
    },
  ])
  .then((data) => {
    const fileName = 'README.md';
    const readmeContent = generateReadmeContent(data);
    writeToFile(fileName, readmeContent);
  });
  }

  function generateReadmeContent(data) {
    const { name, description, license } = data;
  
    // Generate the README content based on the collected data
    const readmeContent = `# ${name}\n\n` +
      `## Description\n\n${description}\n\n` +
      `## License\n\nThis application is licensed under the ${license} license.`;
  
    return readmeContent;
  }
  
  init();

