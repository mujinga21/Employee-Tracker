/* Seeds for SQL table. We haven't discussed this type of file yet */
USE employee_trackerDB;

/* Insert 3 Rows into your new table */
INSERT INTO department (department_name)
VALUES ("UMass");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("boss",4000,1);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("linda","james",1, NULL);

