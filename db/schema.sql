DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

-- Create the table actors.

CREATE TABLE department (
     id INT NOT NULL AUTO_INCREMENT,
     name varchar(30),
     PRIMARY KEY(id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL,
department_id INT,
    CONSTRAINT fk_department
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    PRIMARY KEY (id)
);

CREATE TABLE employee(
     id INT NOT NULL AUTO_INCREMENT,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     role_id INT,
     manager_id INT,
     CONSTRAINT fk_role
     FOREIGN KEY (role_id)
     REFERENCES roles(id)
     ON UPDATE CASCADE
     ON DELETE CASCADE,
     CONSTRAINT fk_employee
     FOREIGN KEY (manager_id)
     REFERENCES employees(id)
     ON UPDATE CASCADE
     ON DELETE CASCADE,
     PRIMARY KEY (id)
 
),




