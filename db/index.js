'use strict';

const connection = require('./coonecton');

// classes the connection

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    end() {
        connection.end();
    };

// function to view all departments
    viewAllDepts() {
        return this.connection.query(
            `
            SELECT
                departments.id,
                departments.name AS Department
            FROM
                departments
            ORDER BY
                departments.id;
            `
        );
    };
//function to view all roles
    viewAllRoles() {
        return this.connection.query(
            `
        SELECT
            roles.id,
            roles.title AS Role,
            roles.salary AS Salary,
            departments.name AS Department
        FROM
            roles
        LEFT JOIN
            departments ON roles.department_id = departments.id
        ORDER BY
            roles.id;
            ` 
        );
    };
   
    viewAllEmployees() {
        return this.connection.query(
            `
            SELECT
                employees.id AS ID,
                employees.first_name AS First_Name,
                employees.last_name AS Last_Name,
                roles.title AS Role,
                employees.manager_id AS Manager_ID
            FROM
                employees
            LEFT JOIN
                roles ON employees.role_id = roles.id
            ORDER BY
                employees.id;
            `
        );
    };

    viewEmployee(id) {
        return this.connection.query(
            `
            SELECT
                employees.id AS ID,
                employees.first_name AS firstName,
                employees.last_name AS lastName,
                employees.role_id AS roleID,
                roles.title AS Role,
                employees.manager_id AS managerID
            FROM
                employees
            LEFT JOIN
                roles ON employees.role_id = roles.id
            WHERE
                employees.id = (?);
            `, [id]
        );
    };


    // function to add department
    addDepartment(department) {
        return this.connection.query(
            `
            INSERT INTO 
                departments (name)
            VALUES (?);
            `, [department]
        );
    };
// function  to  add role
    addRole(title, salary, department_id) {
        return this.connection.query(
            `
            INSERT INTO 
                roles (title, salary, department_id)
            VALUES (?);
            `, [title, salary, department_id]
            
        );
    };
//function to add employee
    addEmployee(first_name, last_name, role_id, manager_id) {
        return this.connection.query(
            `
            INSERT INTO 
                employees (first_name, last_name, role_id, manager_id)
            VALUES (?);
            `, [first_name, last_name, role_id, manager_id]
        );
    };


    // function to update employee
    updateEmployee(id, first_name, last_name, role_id, manager_id) {
        return this.connection.query(
            `
            UPDATE 
                employees
            SET (?)
            WHERE (?);
            `, [
                {
                    first_name: first_name, 
                    last_name: last_name, 
                    role_id: role_id, 
                    manager_id: manager_id  
                },
                {
                    id: id
                }
            ]
        );
    };

    // functipn to delete employee
    deleteEmployee(id) {
        return this.connection.query(
            `
            DELETE FROM 
                employees 
            WHERE
                id = (?);
            `, [id]
        );
    };



}

module.exports = new DB(connection)
