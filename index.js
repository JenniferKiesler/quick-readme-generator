const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples on how to use of your project."
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project.",
        default: 'None',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0', 'The Unlicense', 'None']
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide guidelines for how to contribute to your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide test instructions."
    },
    {
        type: "input",
        name: "githubURL",
        message: "What's your github URL?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email address?"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err
        console.log('README saved!')
    })
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        const readme = generateMarkdown(answers)
        // console.log(readme)

        writeToFile('./readme-sample.md', readme)
    })
    .catch(err => console.log(err))
}

// Function call to initialize app
init();
