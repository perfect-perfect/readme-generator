
// this applicaton will be invoked by using node index.js

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//*********** NOTES *************//
// because this application will not be deployed, create a walk through video that displays its functionality. Revisit 2.2.4//
// you'll need to submit a link to the video and add it to the README of your project

const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');


const promptReadMe = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What the title of the project?'
        },
        {
            type: 'confirm',
            name: 'table',
            message: 'Would you like to include a table of contents?',
            default: false
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why and how of your project.' 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use'
        },
        {
            type: 'input',
            name: 'video',
            message: 'What is the URL of the video'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How would you like others to contribute?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If there is a test, how does one run it?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
        }

    ])
};


promptReadMe()
    .then(readMeData => {
        const pageMarkdown = generateMarkdown(readMeData)

        fs.writeFile('README.md', pageMarkdown, err => {
            if (err) throw err;
            console.log('success!')
        })
 
    })


