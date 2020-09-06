'use strict';
const inquirer = require('inquirer');
const logo = require('asciiart-logo');
//const prompts = require('./prompts');
const db = require('./db');
const { prompts } = require('inquirer');
const connection = require('./db/coonecton');
require('console.table');




async function viewAllTitles() {
  const titles = await db.viewallTitles();

  console.log('/n');
  console.table(titles);

  mainPrompt()
}






/*
async function viewAllDepartments() {
  const departments = await db.viewAllDepartments();

  console.log('/n');
  console.table(department);

  mainPrompt()
}



async function viewAllRoles() {
  const roles = await db.viewallRoles();

  console.log('/n');
  console.table(role);

  mainPrompt()
}

*/

// viewAllDepartment
// viewAllRoles
// viewAllTiles
// exit function

//const { choices } =  await inquirer.prompt(prompts.mainPrompt);

/*
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
    case 'Exit':
      connection.end();
      break;
  }
}
mainPrompt();
*/