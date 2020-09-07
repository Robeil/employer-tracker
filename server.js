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
// function to add new role
async function addRole() {
  const { title, salary, department_id } = await inquirer.prompt(prompts.addRole);
  const newRole = await db.addRole(title, salary, department_id);

  console.log('\n');
  console.log(
    `New Role:
      Title: ${title}
      Salary: ${salary}
      Department_ID: ${department_id}
      `
  );

  mainPrompt();
}
// function to view all new employee
async function addEmployee() {
  const { first_name, last_name, role_id, manager_id } = await inquirer.prompt(prompts.addEmployee);
  console.log(first_name, last_name, role_id, manager_id);

  mainPrompt();
}
// function to end all the functions
function End() {
  db.End();
  process.on('End', function(code) {
      return console.log(`ending ${code}`);
  });
  process.End();
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



