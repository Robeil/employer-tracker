DROP DATABASE IF EXISTS employee_data;
CREATE DATABASE employee_data;
USE employee_data;

-- Create the table actors.

CREATE TABLE employee(
  id INT,
   FOREIGN KEY (manager_id),
  PRIMARY KEY (id),
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL ,
  manager_id INT NOT NULL ,
  
  FOREIGN KEY (role_id)
 
),

CREATE TABLE role (
id INT AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL,
PRIMARY KEY (id) INT,
FOREIGN KEY(department_id) INT 
);
CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

SELECT 
role.id,
role.titile,
role.salary,
house.name AS House
FROM 
role
LEFT JOIN 
house On role.house_id = house_id
ORDER BY
role.id;



-- INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry", 90, "relaxed");
-- INSERT INTO actors (name, coolness_points, attitude) VALUES ("Elaine", 80, "righteous");
-- INSERT INTO actors (name, coolness_points, attitude) VALUES ("Kramer", 20, "doofus");
-- INSERT INTO actors (name, coolness_points, attitude) VALUES ("George", 70, "selfish");