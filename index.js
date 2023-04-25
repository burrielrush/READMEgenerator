// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");


// TODO: Create an array of questions for user input
const questions = [
  
    {
    type: "input",
    name: "title",
    message: "Project name:",
    },
    {
    type: "input",
    name: "description",
    message: "Describe purpose and functionality of project",
    },
    {
    type: "checkbox",
    name: "license",
    message: "Please select a license for your project:",
    choices: ["MIT", "APACHE-2.0", "GPL-3.0", "BSD-3-CLAUSE", "MPL-2.0"], 
    },
    {
    type: "input",
    name: "contributing",
    message: "Project dependencies:",
    },
    {
    type: "input",
    name: "technologies",
    message: "Coding languages and technologies used to create project: ",
    },
    {
    type: "input",
    name: "installation",
    message: "Describe how to install project for use.",
    },
    {
    type: "input",
    name: "usage",
    message: "Describe the usage of this project."
    },
    {
    type: "input",
    name: "testing",
    message: "What testing can be done and how to run tests?"
    },
    {
    type: "input",
    name: "contact-me",
    message: "Input contact information."
    },
    {
    type: "input",
    name: "email",
    message: "What is your email?"
    },
    {
    type: "input",
    name: "github",
    message: "What is your Github account?"
    }

];

console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("README.md file being generated..");
        writeToFile("./README.md", generateMarkdown({responses}));
    });
};

function generateMarkdown(data) {
    return `# ${data.responses.title}

    ## Table of Contents

  - [Description](#description)
  - [License](#license)
  - [Dependencies](#dependencies)
  - [Technologies Used](#technologies-used)
  - [Usage](#usage)
  - [Installation](#installation)
  - [Github](#github)
  - [Contact Information](#contact-information)
  
    ## Description
    ${data.responses.description}
  
    ## License
    ${data.responses.license}
  
    ## Dependencies
    ${data.responses.contributing}
  
    ## Technologies Used
    ${data.responses.technologies}

    ## Usage 
    ${data.responses.usage}

    ## Testing
    ${data.responses.testing}
  
    ## Installation
    ${data.responses.installation}

    ## Github
    ${data.responses.github}
  
    ## Contact Information
    Contact me at ${data.responses.email}

    ## Questions

    For questions or support, please contact ${data.responses.email}. You can also visit my [GitHub profile](https://github.com/${data.responses.github}).
    `;
  }



// Function call to initialize app
init();
 