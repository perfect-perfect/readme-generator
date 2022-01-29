const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
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
const profileDataArgs = process.argv.slice(2, process.argv.length);

const [title, description] = profileDataArgs;


fs.writeFile('README.md', generateMarkdown(title, description), err => {
    if (err) throw err;

    console.log('README complete! Checkout README.md to see the output!')
})
