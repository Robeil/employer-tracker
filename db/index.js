'use strict';

const connection = require('./connection');



class DB {
    constructor(connection) {
        this.connection = connection;
    }

    end() {
        connection.end();
    };
    
        viewAllDepartment() {
            return this.connection.query(
                `
                SELECT
                    department.id,
                    department.name AS Department
                FROM
                    department
                ORDER BY
                    department.id;
                `
            );
        };
    
        viewAllRoles() {
            return this.connection.query(
                `
            SELECT
                role.id,
                role.title AS Role,
                role.salary AS Salary,
                department.name AS Department
            FROM
                role
            LEFT JOIN
                department ON role.department_id = department.id
            ORDER BY
                role.id;
                ` 
            );
        };
       
        viewAllEmployees() {
            return this.connection.query(
                `
                SELECT
                e1.id AS ID,
                e1.first_name AS First_Name,
                e1.last_name AS Last_Name,
                role.title AS Role,
                CONCAT(e2.first_name, ' ', e2.last_name) AS Manager_Name,
                e1.manager_id AS Manager_ID
            FROM
                employee e1
            LEFT JOIN
                roles ON e1.role_id = roles.id
            LEFT JOIN
                employee e2 ON e1.manager_id = e2.id
                ORDER BY
                    e1.id;
                `
            );
        };
    
        viewEmployee(id) {
            return this.connection.query(
                `
                SELECT
                employee.id,
                employee.first_name,
                employee.last_name,
                employee.role_id,
                employee.manager_id
            FROM
                employee
                WHERE
                employee.id = ?;
                `, [id]
            );
        };
    
    
        addDepartment(department) {
            return this.connection.query(
                `
                INSERT INTO 
                    department (name)
                VALUES (?);
                `, [department]
            );
        };
    
        addRole(title, salary, department_id) {
            return this.connection.query(
                `
                INSERT INTO 
                    role (title, salary, department_id)
                VALUES (?, ?, ?);
                `, [
                    title,
                    salary,
                    department_id
                ]
                
            );
        };
    
        addEmployee(first_name, last_name, role_id, manager_id) {
            return this.connection.query(
                `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`, [first_name, last_name, role_id, manager_id]
            );
        };
    
        updateEmployee(id, first_name, last_name, role_id, manager_id) {
            return this.connection.query(
                `
                UPDATE 
                    employee
                SET ?
                WHERE ?;
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
    

        deleteEmployee(id) {
            return this.connection.query(
                `
                DELETE FROM 
                    employee
                WHERE
                    id = ?;
                `, [id]
            );
        };
    


    viewEmployeesByManager(manager_id) {
        return this.connection.query(
            `
        SELECT
            e1.id AS ID,
            e1.first_name AS First_Name,
            e1.last_name AS Last_Name,
            role.title AS Role,
            CONCAT(e2.first_name, ' ', e2.last_name) AS Manager_Name,
            e1.manager_id AS Manager_ID
        FROM
            employee e1
        LEFT JOIN
            role ON e1.role_id = role.id
        LEFT JOIN
            employee
             e2 ON e1.manager_id = e2.id
            WHERE
            e1.manager_id = ?;
            `, [manager_id]
        );
    };


}

module.exports = new DB(connection)