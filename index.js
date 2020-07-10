const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project",
        name: "title",
    },
    {
        type: "input",
        message:"Provide a description of your project",
        name: "description"
    },
    {
        type: "input",
        message:"What is the method and procedure for installation",
        name: "installation"
    },
    {
        type: "input",
        message:"List instructions on how to use the application",
        name: "usage"
    },
    {
        type: "list",
        message:"Select which license(s) were used",
        name: "license",
        choices:[
            'GNU General Public License v3.0',
            'MIT License',
            'Apache License v2.0'
        ]
    },
    {
        type: "input",
        message:"What are the contribution guidelines for user-generated content?",
        name: "contributing"
    },
    {
        type: "input",
        message:"What are the test instructions?",
        name: "tests"
    },
    {
        type: "input",
        message:"What is your gitHub user name?",
        name: "gitHub"
    },
    {
        type: "input",
        message:"What is your email address?",
        name: "email"
    },

];

// function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program
function init() {
return inquirer.prompt(questions)
}

// function call to initialize program
init()
    .then(function(data){
        const answers = generateMarkdown(data);
        return writeFileAsync(`${data.title}_README.md`, answers);
    })
    .then(function(){
        console.log("Successfully created README file");
    })
    .catch(function(err){
        console.log(err)
    });