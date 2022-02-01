// Creates license badge
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `![githublicense](https://shields.io/badge/license-${license}-blue.svg)`
  }
  return ''

}

// Creates the link to the license that was chosen
function renderLicenseLink(license) {
  if ( license == 'MIT') {
    return `[MIT License](https://choosealicense.com/licenses/mit/)`
  }
  else if (license == 'APACHE2.0') {
    return `[APACHE 2.0 License](https://choosealicense.com/licenses/apache-2.0/)`
  }
  else if (license == 'GPL3.0') {
    return `[GPL 3.0 License](https://choosealicense.com/licenses/gpl-3.0/)`
  }
  else if (license == 'BSD3') {
    return `[BSD3 License](https://choosealicense.com/licenses/bsd-3-clause/)`
  }
  else if (license == 'None') {
    return ``
  }
  
}

// Creates Question section
function renderQuestions(username, email) {
  return `You can reach me through GitHub or E-mail

  [GitHub Profile](https://www.github.com/${username}/)

  ${email}`
}

// Creates table of Contents
const tableCheck = table => {
  if(table) {
  return `
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)`;
  }
  return``;

}

// Exports this function that is a template literal
module.exports = templateData => {

  return `
  # ${templateData.title} 
    
  ## Description
  ${templateData.description}

  ${renderLicenseBadge(templateData.license)}
  
  ## Table of Contents
  ${tableCheck(templateData.table)}
  
  ## Installation
  ${templateData.installation}
    
  ## Usage
  ${templateData.usage}

  [Link to Video](${templateData.video})

  ## Contributing
  ${templateData.contributing}

  ## Tests
  ${templateData.tests}
  
  ## Questions
  ${renderQuestions(templateData.username, templateData.email)}
    
  ## License
  ${renderLicenseLink(templateData.license)}
  `;
};