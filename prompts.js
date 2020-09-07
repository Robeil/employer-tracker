//const inquirer = require('inquirer');
module.exports = {

    mainPrompt: [{
        type: 'list',
        name: 'choice',
        message: 'What would you like to add?',
        choice: [{
            name: 'View all Departments',
            value: 'View_Departments',
        },
        {
            name: 'View All Employee Roles',
            value: 'View_employee_Roles',
        },
        {
            name: 'View all Employees',
            value: 'View_Employees',
        },
        {
            name: 'Vie Add Department ',
            value: 'Add_Department',
        },
        {
            name: 'Add Role',
            value: 'add_role',
        },
        {
            name: 'Add Employee',
            value: 'Add_Employee',
        },
        {
            name: 'End',
            value: 'End',
        },
        ],
    },
    ],

    addDepartment: [{
        type: 'input',
        name: 'name',
        message: 'Title of new Department:'
    }],

    
