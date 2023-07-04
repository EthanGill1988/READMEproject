const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if(err) {
      console.error.apply(err);
      return;
    }
    console.log ("README file created successfully brah!");
  });
    
}

// TODO: Create a function to initialize app
function init() {
  const fileName = 'README.md';
  const data = '# My project\n\nThis is a sample READMe file.';

  writeToFile(fileName, data);
}