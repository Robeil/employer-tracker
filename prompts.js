module.exports = {
    mainPrompt: [{
        type: 'list',
        name: 'mainPrompt',
        message: 'Select the action you would like to do:',
        choices: [
            "View All Employees",
            "View All Roles",
            "View All Departments",
            "Add New Department",
            "Add New Role",
            "Add New Employee",
            "Update Employee",
            "Exit"]
    }],

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

    selectEmployee_askID: [{
        type: 'number',
        name: 'id',
        message: 'ID Number of the employee you would like to select?'
    }],
    updateEmployee_function: function (firstName,
        lastName,
        roleID,
        managerID) {
        return [
            {
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
                default: managerID,
                message: 'Employee\'s Manager\'s ID:'
            }
        ]
    },


}
