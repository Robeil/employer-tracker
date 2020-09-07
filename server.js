'use strict';
let inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
//const { prompts } = require('inquirer');
const connection = require('./db/coonecton');
require('console.table');



// function to view all the titles
async function viewAllTitles() {
  const titles = await db.viewallTitles();

  console.log('/n');
  console.table(titles);

  mainPrompt()
}
// function to view all the department
async function viewAllDepartments() {
  const departments = await db.viewAllDepartments();

  console.log('/n');
  console.table(departments);

  mainPrompt()
}
// function to view all the roles
async function viewAllRoles() {
  const roles = await db.viewallRoles();

  console.log('/n');
  console.table(roles);

  mainPrompt()
}
// function to view all the employees
async function viewAllEmployees() {
  const employees = await db.viewAllEmployees();

  console.log('\n');
  console.table(employees);

  mainPrompt();
}
// function to view all the department
async function addDepartment() {
  const { name } = await inquirer.prompt(prompts.addDepartment);
  const newDepartmentt = await db.addDepartment(name);

  console.log('\n');
  console.log(`New Department ${name}`);

  mainPrompt();
}

// function that generate all the questions
async function mainPrompt() {
  const { mainPrompt } = await inquirer.prompt(prompts);

  switch (mainPrompt) {

    case 'View All Departments':
      viewAllDepartments();
      break;

    case 'View All Roles':
      viewAllRoles();
      break;
    case 'view All Employees':
      viewAllEmployees()
      break;
    case "Add New Department":
      addDepartment();
      break;
    case "Add New Role":
      addRole();
      break;
    case "Add New Employee":
      addEmployee();
      break;
    case 'End':
      connection.end();
      break;
  }
}



