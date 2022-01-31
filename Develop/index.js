
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

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const [title, description] = profileDataArgs;


// fs.writeFile('README.md', generateMarkdown(title, description), err => {
//     if (err) throw err;

//     console.log('README complete! Checkout README.md to see the output!')
// })
const promptReadMe = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What the title of the project?'
        },
        {
            type: 'confirm',
            name: 'table-of-contents',
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
        }

    ]);
};

const promptTable = portfolioData => {
    // portfolioData.projects = [];
    console.log(portfolioData)
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'table-of-contents',
            message: 'Would you like to include a table of contents?',
            default: false
        }
    ])
    // .then(projectData => {
    //     portfolioData.push(projectData);
    // })
    .then(projectData => {
        // portfolioData.projects.push(projectData)
        console.log(projectData);

        // return portfolioData;
    });
};


promptReadMe()
    // .then(answers => console.log(answers))
    .then(promptTable)
    // .then(answers => console.log(answers));
    // .then(portfolioData => {
    //     console.log(portfolioData)

    //     const pageMarkdown = generateMarkdown(portfolioData);
    // });
    // right now when i console.log in the generateMarkdown, it is only receiving the data from promptTable() and nothing fromn promptReadME, How do get them to become one object. 
    // .then(projectData => {
    //     console.log(projectData);
    //     const pageMarkdown = generateMarkdown(projectData);


    //     // console.log(pageMarkdown);

    //     fs.writeFile('README.md', pageMarkdown, err => {
    //         if (err) throw err;
        
    //         console.log('README complete! Checkout README.md to see the output!')
    //     });
    // });


