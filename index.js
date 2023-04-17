// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
   "1. What is the name of your project?",
   "2. What is your project about?",
   "3. What problem does your project solve?",
   "4. What technologies did you use to build your project?",
   "5. How do you install and use your project?",
   "6. What are the features of your project?",
   "7. How do you contribute to your project?",
   "8. How do you report issues or bugs?",
   "9. Who can use your project?",
  "10. What license is your project released under?"
];

console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = `# ${data.title}
  
    ${data.description}
  
    ## Table of Contents
    ${data.contents.map(item => `- [${item}](#${item.toLowerCase().replace(/ /g, '-')})`).join('\n')}
  
    ${data.sections.map(section => `
    ## ${section.title}
    ${section.content}`).join('\n')}
  
    ${data.contributing}
  
    ${data.license}`;
  
    fs.writeFile(fileName, content, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`README file has been generated as ${fileName}`);
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
