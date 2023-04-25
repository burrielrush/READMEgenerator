// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseLower = license.toLowerCase();

  if (licenseLower === 'mit') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (licenseLower === 'apache-2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (licenseLower === 'gpl-3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (licenseLower === 'bsd-3-clause') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (licenseLower === 'mpl-2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else {
    return '';
  }
}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseLower = license.toLowerCase();

  if (licenseLower === 'mit') {
    return 'https://opensource.org/licenses/MIT';
  } else if (licenseLower === 'apache-2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (licenseLower === 'gpl-3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (licenseLower === 'bsd-3-clause') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (licenseLower === 'mpl-2.0') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } else {
    return '';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const licenseLower = license.toLowerCase();

  if (licenseLower === 'mit') {
    return `## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.`;
  } else if (licenseLower === 'apache-2.0') {
    return `## License
This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.`;
  } else if (licenseLower === 'gpl-3.0') {
    return `## License
This project is licensed under the GPL 3.0 License - see the [LICENSE](LICENSE) file for details.`;
  } else if (licenseLower === 'bsd-3-clause') {
    return `## License
This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details.`;
  } else if (licenseLower === 'mpl-2.0') {
    return `## License
This project is licensed under the MPL 2.0 License - see the [LICENSE](LICENSE) file for details.`;
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = '';
  if (data.license) {
    licenseSection = `${renderLicenseBadge(data.license)}\n\n${renderLicenseSection(data.license)}\n\n`;
  }
  return `# ${data.title}

${licenseSection}## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact-Me](#contact-me)
${renderLicenseLink(data.license) ? '- [License](#license)\n' : ''}- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Contact Me
${data.contactMe}

${renderLicenseSection(data.license)}

## Questions
For questions or support, please contact ${data.email}. You can also visit my [GitHub profile](https://github.com/${data.githubUsername}).
`;
}


module.exports = generateMarkdown;
