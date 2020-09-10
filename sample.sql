
/*module.exports = {

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

    },
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
        message: 'Employee\'s Manager\'s ID:'

    }
    ],
    updateEmployee_function: function(firstName, lastName, roleID, managerID) {
        return [
            {
                type: "input",
                name: "first_name",
                message: "Employee\'s First Name:"
            },
            {
                type: "input",
                name: "last_name",
                message: "Employee\'s Last Name:"
            },
            {
                type: "number",
                name: "role_id",
                message: "Employee's Role ID:"

            },
            {
                type: "number",
                name: "manager_id",
                message: "Employee's Manager's ID:"
         
            }
        ]
    },

    deleteEmployee: [{
        type: "confirm",
        name: "confirmDelete",
        message: "Are you sure you wont delete this record?",
        default: "no"
    }],

    viewEmployeesByManager: [{
        type: "number",
        name: "manager_id",
        message: "Search all employees by Manager's ID:"
    }]

};
*/



/*