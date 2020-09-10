'use strict';

const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
const { right } = require('inquirer/lib/utils/readline');
require('console.table');


function exit() {
    db.end();
    process.on('exit', function (code) {
        return console.log(`Ending Good bye ${code}`);
    });
    process.exit();
}
async function viewAllDepartment() {
    const department = await db.viewAllDepartment();

    console.log('\n');
    console.table(department);

    mainPrompt();
}

async function viewAllRoles() {

    const role = await db.viewAllRoles();

    console.log('\n');
    console.table(role);

    mainPrompt();
}

async function viewAllEmployees() {
    const employee = await db.viewAllEmployees();

    console.log('\n');
    console.table(employee);

    mainPrompt();
}

async function addDepartment() {
    const { name } = await inquirer.prompt(prompts.addDepartment);
    const newDept = await db.addDepartment(name);

    console.log('\n');
    console.log(`New Department ${name} added.`);
    mainPrompt();
}

async function addRole() {

    const { 

        title,
        salary,
        department_id
    } = await inquirer.prompt(prompts.addRole);

    const newRole = await db.addRole(
        title,
        salary,
        department_id
    );

    console.log('\n');
    console.log(
        `New Role added:
        Title: ${title}
        Salary: ${salary}
        Department_ID: ${department_id}
        `
    );
    mainPrompt();
}

async function addEmployee() {

    const {

        first_name,
        last_name,
        role_id,
        manager_id 

    } = await inquirer.prompt(prompts.addEmployee);

    const newEmployee = await db.addEmployee(first_name,
        last_name,
        role_id,
        manager_id);

    console.log('\n');
    console.log(
        `New Role added:
        First Name: ${first_name}
        Last Name: ${last_name}
        Role_ID: ${role_id}
        Manager_ID: ${manager_id}
        `
    );

    mainPrompt();
}

async function updateEmployee() {

    const { id } = await inquirer.prompt(prompts.selectEmployee_askID);

    const selectedEmployee = await db.viewEmployee(id);

    console.log('\n');
    console.table(selectedEmployee);

    const { 
        first_name: firstName,
        last_name: lastName,
        role_id: roleID,
        manager_id: managerID
    } = selectedEmployee[0];

    const updateEmployee_details = prompts.updateEmployee_function(

        firstName,
        lastName,
        roleID,
        managerID
        );

    const { 

        first_name,
        last_name,
        role_id,
        manager_id 
    } = await inquirer.prompt(updateEmployee_details);

    const updatedEmployee = await db.updateEmployee(
        id,
        first_name,
        last_name,
        role_id,
        manager_id
        );
    const newSelectedEmployee = await db.viewEmployee(id);

    console.log('\n');
    console.log(`Update ${id} new employee:`);
    console.table(newSelectedEmployee);

    mainPrompt();
}

async function mainPrompt() {

    const { mainPrompt } = await inquirer.prompt(prompts.mainPrompt);

    switch (mainPrompt) {
        case "View All Departments":
            viewAllDepartment();
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
        case "Exit":
            exit();
            break;
    }

}

function myLogo() {

    console.log(
        logo({
            name: 'Employee Tracker',
            font: '',
            lineChars: 0.5,
            borderColor: 'yellow',
            logoColor: 'bold-blue',
            textColor: 'white',
        })
            .emptyLine()
            .center('Here is the Employee Tracker.')
            .render()
    );
}




function init() {
    myLogo();
    console.log("Employee Tracker");
    mainPrompt();
}

init();