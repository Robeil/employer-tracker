DROP DATABASE IF EXISTS employee_data;
CREATE DATABASE employee_data;
USE employee_data;

-- Create the table actors.
CREATE TABLE department_db(
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role_db(
  id int AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY(id)
);

CREATE TABLE employee_db(
 id int AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY(id)
);



-- INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry", 90, "relaxed");
-- INSERT INTO actors (name, coolness_points, attitude) VALUES ("Elaine", 80, "righteous");
-- INSERT INTO actors (name, coolness_points, attitude) VALUES ("Kramer", 20, "doofus");
-- INSERT INTO actors (name, coolness_points, attitude) VALUES ("George", 70, "selfish")