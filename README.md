# Employee -tracker

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
  Used Mysql, node.js
  ## Usage
  ${data.usage}
  This is to to create an employee management form that will help the manager add, and view employee, departments and roles.
  ## License
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business

## video link
```
https://drive.google.com/file/d/1GMjGzlWxTXfnCjkfO76Fqcei8SAGOufl/view?usp=sharing


  ## Questions
If you have questions about my projects please long into my GitHub at the address below:
  $https://github.com/${data.github}
To contact me please send an email to the email address below:
  ${data.email}@gmail.com
`;
}

module.exports = generateMarkdown;