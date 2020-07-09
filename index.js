const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("/utils.generateMarkdown.js");

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
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();



const fs = require("fs");
const inquirer = require("inquirer");
const fileName = "";
async function createFile(response) {
    try {
        console.log(response);
        const { fileName } = await fs.writeFile(
            `${response.name}.html`);
            console.log("success!")
    } catch (err) {
        console.log(err);
    }
};
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "list",
        message: "What is your location?",
        name: "location",
        choices: [
            "Austin",
            "Houston",
            "San antonio",
            "Just in Texas"
        ]
    },
    {
        type: "input",
        message: "Tell us about yourself.",
        name: "bio"
    },
    {
        type: "input",
        message: "What is your linked in name?",
        name: "linkedin"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    }
];
async function writeToFile(fileName, data) {
    let userResponse = await inquirer.prompt(questions)
    //   console.log(userResponse);
    createFile(userResponse);
}
writeToFile();
