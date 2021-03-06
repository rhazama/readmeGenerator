//checks if there is no license and return to an empty string if not
// function renderLicenseBadge(license) {}

// function renderLicenseLink(license) {}

// function renderLicenseSection(license) {}

//creates a function to generate markdown for README
function generateMarkdown(answers) {
    return `
<h1 align="center">${answers.title} </h1>

![badge](https://img.shields.io/badge/license-MIT-brightgreen)<br />
## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
You can checkout the application through the following link: ${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license.
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
Send any questions you may have to: ${answers.email}<br />
    `;
}

module.exports = generateMarkdown;