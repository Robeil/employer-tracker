const inquirer = require('inquirer');

module.exports = {

    mainPrompt: [{
        type: 'list',
        name: 'choice',
        message: 'What would you like to add?',
        choice: [{
            name: 'View all characters',
            value: 'View_characters',
        },
        {
            name: 'Add character',
            value: 'Add_character',
        },
        {
            name: 'Update character Role',
            value: 'Update_character_Role',
        },
        {
            name: 'View all Titles',
            value: 'View_titles',
        },
        {
            name: 'Add Title',
            value: 'Add_title',
        },
        {
            name: 'View all Houses',
            value: 'ViewAllHouses',
        },
        {
            name: 'Add House',
            value: 'Add_House',
        },
        {
            name: 'Quit',
            value: 'Quit',
        },
        ],


    },
    ],

    addDepartment: [{
        type: 'input',
        name: 'name',
        message: 'Title of new Department:'
    }],

    addRole: [{
        type: 'input',
        name: 'title',
        message: 'Title of new role:'
    },

    {
        type: 'number',
        name: 'salary',
        message: 'Salary:'

    },

    {
        type: 'number',
        name: 'department_id',
        message: 'Department ID:'

    }

addEmployee: [{
        type: 'input',
        name: 'first_name',
        message: 'Employee\'s First Name:'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Employee\'s Last Name:'
    },
    {
        type: 'number',
        name: 'role_id',
        message: 'Employee\'s Role ID:'

    },
    {
        type: 'number',
        name: 'manager_id',
        message: 'Employee\'s Manager\'s ID:'

    }
    ],
        addEmployee: [{
            type: 'input',
            name: 'first_name',
            message: 'Employee\'s First Name:'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Employee\'s Last Name:'
        },
        {
            type: 'number',
            name: 'role_id',
            message: 'Employee\'s Role ID:'
            
        },
        {
            type: 'number',
            name: 'manager_id',
            message: 'Employee\'s Manager\'s ID:',
         
        }
    ],
    ]
}