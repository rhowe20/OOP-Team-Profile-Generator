const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');


const managerQuestions = [
  {
    type: 'input',
    message: 'Welcome! What is your team manager\'s name?',
    name: 'managerName'
  },{
    type: 'input',
    message: 'What is the manager\'s ID number?',
    name: 'managerID'
  },{
    type: 'input',
    message: 'What is the manager\'s email address?',
    name: 'managerEmail'
  },{
    type: 'input',
    message: 'What is the manager\'s office number?',
    name: 'managerOffice'
  },{
    type: 'list',
    message: 'Would you like to add more members to your team?',
    name: 'newEmployee',
    choices: [
        'Engineer',
        'Intern',
        'I am done making my team!'
    ]
  }
];

inquirer
.prompt(managerQuestions).then(response => {
  const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice);
});

const engineerQuestions = [
  {
    type: 'input',
    message: 'What is the engineer\'s name?',
    name: 'engineerName'
  },{
    type: 'input',
    message: 'What is the engineer\'s ID number?',
    name: 'engineerID'
  },{
    type: 'input',
    message: 'What is the engineer\'s Github account name?',
    name: 'engineerGithub'
  },{
    type: 'list',
    message: 'Thank you! What would you like to do next?',
    name: 'engineerChoices',
    choices: [
      'Intern',
      'Engineer',
      'I am done making my team!'
    ]
  }
]

inquirer
.prompt(engineerQuestions).then(response => {
  const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerOffice);
});

const internQuestions = [
  {
    type: 'input',
    message: 'What is the Intern\'s name?',
    name: 'InternName'
  },{
    type: 'input',
    message: 'What is the Intern\'s ID number?',
    name: 'InternID'
  },{
    type: 'input',
    message: 'What is the Intern\'s school name?',
    name: 'InternGithub'
  },{
    type: 'list',
    message: 'Thank you! What would you like to do next?',
    name: 'InternChoices',
    choices: [
      'Intern',
      'Engineer',
      'I am done making my team!'
    ]
  }
]

inquirer
.prompt(internQuestions).then(response => {
  const intern = new Intern(response.internName, response.internID, response.internEmail, response.internOffice);
});


// 1. predefine the 3 classes/constructor functions for the three types of employees : manager, engineer, intern
// 2. get info from the client about each employee to be added
//    2.1 ask for name and other info of the manager
//    2.2 ask if client wants to add another employee or exit
//    3.3 repeat  
//    2.2 until exit;
// greet and ask for managers name: 
// build an employee of type manager using a constructor (by passing all the info into the constructor)
    // generate html with info of the employee (by running build command)
// ask client if they want to add more interns or enginners or exit 
// if they want to exit, finish the app
// if the want to build a new employer, add one to html using the constructor of the apropriate type 




function Employee(name, id) {
    this.name = name;
    this.id = id;
    this.buildHtml = function buildHtml() {
      console.log(this.name);
      console.log(this.id);
      console.log(this.role);
    }
  }
  function Manager(name, id, role) {
    this.role = role;
    Employee.call(this, name, id);
  }
  const manager = new Manager('A', 'B', 'C');
  manager.buildHtml();