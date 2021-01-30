const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require ('./lib/employee');


const handleAnswers = [];

const promptQs = [
  {
    type: 'list',
    message: 'Welcome! Thank you for your using our app. Who is the employee you would like to add?',
    name: 'role',
    choices: [
      'Manager',
      'Engineer',
      'Intern',
    ]
  },{
    type: 'input',
    message: `What is the employee name?`,
    name: 'name',
  },{
    type: 'input',
    message: `What is the employee ID number?`,
    name: 'id'
  },{
    type: 'input',
    message: `What is the employee email?`,
    name: 'email'
  }]

  
function createEmployee(){
  inquirer.prompt(promptQs)
  .then(function ({name, id, email, role}) {
    let extra = '';
    if (role === 'Manager') {
        extra = 'office number';
    } else if (role === 'Engineer') {
        extra = 'Github username';
    } else {
        extra = 'school';
    }

  inquirer.prompt([{
    message: `What is the employee's ${extra}?`,
    name: 'extra',
    },{
    message: 'Would you like to add another employee?',
    name: 'newEmployee',
    type: 'confirm',
    }])

  .then(function({extra, newEmployee}) {
      let emp;
      if (role === 'Manager') {
          emp = new Manager(name, id, email, extra);
      } else if (role === 'Engineer') {
          emp = new Engineer(name, id, email, extra);
      } else {
          emp = new Intern(name, id, email, extra);
      }
      handleAnswers.push(emp);
      createCards(emp)

  .then(function() {
      if (newEmployee === true) {
          createEmployee();
      } else {
          // endHtml();
      }
  });
  })
})};

// create html

function createHtml(){
  const html = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
        <link rel="stylesheet" href="./index.css">
        <title></title>
    </head>
    <body>
    
    <div class="header">
        <div class="row">
            <div></div>
        </div>
    </div>
    
    <div class="container">
    
    <div class="row">
  `
}

function createCards(){

  

  const cardHtml = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
        <link rel="stylesheet" href="./index.css">
        <title></title>
    </head>
    <body>
    
    <div class="header">
        <div class="row">
            <div></div>
        </div>
    </div>
    
    <div class="container">
    
    <div class="row">
  `
  
}





























// function createHtml(handleAnswers){
//   fs.writeFile('employee.html', handleAnswers, (err) => { 
      
//     if (err) throw err; 
// }) 
// }


