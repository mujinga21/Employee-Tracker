DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(30)
);

CREATE TABLE employee_role (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
   department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
 
);
CREATE TABLE employee (
 id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 role_id INT,
 FOREIGN KEY (role_id) REFERENCES employee_role(id),
 manager_id INT,
 FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

