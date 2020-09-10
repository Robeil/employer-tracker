'use strict';

const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
require('console.table');



async function viewEmployeeByManager() {
    const {manager_id} = await inquirer.prompt(prompts.viewEmployeesByManager);
    const employeesByManager = await db.viewEmployeesByManager(manager_id);
    console.log('\n');
    console.table(employeesByManager);

    mainPrompt();
}


async function mainPrompt() {
    const { mainPrompt } = await inquirer.prompt(prompts.mainPrompt);

    switch (mainPrompt) {
        case "View All Departments":
            viewAllDepts();
            break;
        case "View All Roles":
            viewAllRoles();
            break;
        case "View All Employees":
            viewAllEmployees();
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
        case "Update Employee":
            updateEmployee();
            break;
        case "Remove Employee":
            deleteEmployee();
            break;
        case "View Employees by Manager":
            viewEmployeeByManager();
            break;
        case "Exit":
            exit();
            break;
    }
    
}


function init() {
    
    console.log("Welcome to the Employee Tracker");
    mainPrompt();
}

init();