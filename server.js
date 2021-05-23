const mysql = require("mysql2");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "1234",
  database: "employee_tracker",
});
connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all role",
        "View all department",
        "Add employee",
        "Add role",
        "Add department",
        "Update role",
        "Exit",
      ],
    })
    .then(function (answer) {
      if (answer.action === "View all employees") {
        viewEmployee();
      } else if (answer.action === "View all role") {
        viewRole();
      } else if (answer.action === "View all department") {
        viewDepartment();
      } else if (answer.action === "Add employee") {
        addEmployee();
      } else if (answer.action === "Add role") {
        addRole();
      } else if (answer.action === "Add department") {
        addDepartment();
      } else if (answer.action === "Update role") {
        updateRole();
      } else if (answer.action === "Exit") {
        connection.end();
      }
    });
}

function viewEmployee() {
  var query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    console.log(`EMPLOYEE:`);
    res.forEach((employee) => {
      console.log(
        `ID: ${employee.id} | Name: ${employee.first_name} ${employee.Last_name}  | Role ID: ${employee.role_id} | Manager ID: ${employee.manager_id}`
      );
    });
    runSearch();
  });
}

function viewRole() {
  var query = "SELECT * FROM role";
  connection.query(query, function (err, res) {
    console.log(`ROLE:`);
    res.forEach((role) => {
      console.log(
        `ID: ${role.id}| Title: ${role.title} | Salary: ${role.salary} | Department ID : ${role.department_id}`
      );
    });
    runSearch();
  });
}

function viewDepartment() {
  var query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    console.log(`DEPARTMENT:`);
    res.forEach((department) => {
      console.log(`ID: ${department.id}| Name: ${department.name}`);
    });
    runSearch();
  });
}

function addEmployee(){

  connection.query("SELECT id, title from role", function (err, res) {
    if (err) throw err;
    const role = res.map(element => 
     element.title)
    inquirer.prompt([
  {
    type: "input",
    name:"firstName",
    message:"enter your employee first name"
  },
  {
    type: "input",
    name:"lastName",
    message:"enter your employee last name"
  },
{
  type: "list",
    name:"role",
    message:"enter your employee role ID",
    choices: role
}
]).then (answers => {
  const chosenRole = res.find(element => {
return Element.title === answers.role
});
console.log(chosenRole.id);
const newEmployee = {
  firstName: answers.firstName,
  lastName: answers.lastName,
  roleId: chosenRole.id
};
connection.query("INSERT INTO employees SET ?", newEmployee, (err, success) => {
  if (err) throw err;
  console.log(`${newEmployee.firstName} was added successfully`);
  runSearch();
})

})
})
}

function addRole(){

  connection.query("SELECT * From department", function (err, res) {
    if (err) throw err;
    const department = res.map(element => {
      return element.id
    })
    inquirer.prompt([
  {
    type: "input",
    name:"title",
    message:"enter your employee title",
  },
  {
    type: "input",
    name:"salary",
    message:"enter your employee salary"
  },
{
  type: "list",
    name:"department_id",
    message:"enter your employee department id",
    choices: department
}
]).then (function (answer) {

connection.query("INSERT INTO role SET ?", 
answer, 
function (err) {
  if (err) throw err;
  console.log(`${answer.title} was added successfully`);
  runSearch();
});

});
})
}


function addDepartment(){

  connection.query("SELECT * From department", function (err, res) {
    if (err) throw err;
    const department = res.map(element => {
      return element.id})
    inquirer.prompt([
  {
    type: "input",
    name:"department",
    message:"enter your department"
  }
]).then(function (answers) {
 
connection.query("INSERT INTO department SET ?", answer, function(err) {
  if (err) throw err;
  console.log(`${answer.department} was added successfully`);
  runSearch();
});

});
})
}



