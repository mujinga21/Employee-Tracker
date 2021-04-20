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
    FOREIGN KEY (department_id) REFERENCES department(id)
 
);
CREATE TABLE employee (
 id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 role_id INT,
 FOREIGN KEY (role_id) REFERENCES employee_role(id)
 manager_id INT
 FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO department (name,id)
VALUES ('Sales',1),('Engineering',2),('Finance',3),('Legal',4);
INSERT INTO employee_role (title, salary,department_id)
VALUES ('Sales Lead',100000,1),('Salesperson',80000,1),('Lead Engineer', 150000, 2),('Software Engineer', 120000, 2),('Accountant', 125000, 3),('Legal Team Lead', 250000, 4),('lawyer', 190000, 4);
select * from department;
select * from employee_role;



