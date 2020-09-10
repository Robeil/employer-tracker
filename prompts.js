module.exports = {
    mainPrompt: [{
        type: "list",
        name: "mainPrompt",
        message: "Select the action you'd like to perform:",
        choices: [

            "View Employees by Manager",
            "View All Departments",
            "Add New Department",
            "Add New Employee",
            "Update Employee",
            "Remove Employee",
            "View All Roles",
            "Add New Role",
            "Exit"]
    }],

    addDepartment: [{
        type: "input",
        name: "name",
        message: "Title of new Department:"
    }],

    addRole: [{
        type: "input",
        name: "title",
        message: "Title of new role:"
    },
    {
        type: "number",
        name: "salary",
        message: "Salary:"
    },
    {
        type: "number",
        name: "department_id",
        message: "Department ID:"
    }
    ],

    addEmployee: [{
        type: "input",
        name: "first_name",
        message: "Employee's First Name:"
    },
    {
        type: "input",
        name: "last_name",
        message: "Employee's Last Name:"
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
    ],

    selectEmployee_askID: [{
        type: "number",
        name: "id",
        message: "What is the id number of the employee you would like to select?"
    }],
    updateEmployee_function: function (firstName, lastName, roleID, managerID) {
        return [
            {
                type: "input",
                name: "first_name",
                message: "Employee's First Name:"
            },
            {
                type: "input",
                name: "last_name",
                message: "Employee's Last Name:"
            },
            {
                type: "number",
                name: "role_id",
                message: "Employee's Role ID:"

            },
            {
                type: "number",
                name: "manager_id",
                default: managerID,
                message: "Employee's Manager's ID:"
            }
        ]
    },

    deleteEmployee: [{
        type: "confirm",
        name: "confirmDelete",
        message: "Are you sure you would like to permanently delete this record? \n (There is no way to undo this.)",
        default: "n"
    }],

    viewEmployeesByManager: [{
        type: "number",
        name: "manager_id",
        message: "Search all employees by Manager's ID:"
    }]

}
