// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "ISC") {
    return (license =
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]");
  } else if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "ISC") {
    return (license = "(https://opensource.org/licenses/ISC)");
  } else if (license === "MIT") {
    return (license = "(https://opensource.org/licenses/MIT)");
  } else return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `## ${data.title}
${renderLicenseBadge(data.license)}
  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [license](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Question](#question)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test} 


  ## Questions
If you have questions about my projects please long into my GitHub at the address below:
  $https://github.com/${data.github}
To contact me please send an email to the email address below:
  ${data.email}@gmail.com
`;
}

module.exports = generateMarkdown;
