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
        return writeFileAsync(`${data.title}.md`, answers);
    })
    .then(function(){
        console.log("Successfully created README file");
    })
    .catch(function(err){
        console.log(err)
    });