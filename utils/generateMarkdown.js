// function to generate markdown for README
function generateMarkdown(data) {`
# ${data.title}

----  
## Table of Contents
* [Description] (#Description)
* [Installation] (#Installation)
* [Usage] (#Usage)
* [License] (#License)
* [Contributing] (#Contributing)
* [Tests] (#Tests)
* [Questions] (#Questions)

----
##Description
${data.description}

----
##Installation
${data.installation}

----
##Usage
${data.usage}

----
##License
${data.license}

----
##Contributing
${data.contributing}

----
##Tests
${data.tests}

----
##Questions

${data.questions}escription

`}

module.exports = generateMarkdown;
