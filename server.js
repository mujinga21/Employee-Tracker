

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
connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});


function runSearch  () {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "view all employees",
        "View all role",
        "View all department",
        "Add employee",
        "Add role",
        "Add department",
        "Update role",
        "Exit",
      ]
    })
    .then(function(answer) {
      if(answer.action === 'view all employees'){
        viewEmployee();
      }else if (answer.action === 'view all role'){
        viewRole();
      }else if (answer.action === 'view all department'){
        viewDepartment();
      }else if (answer.action === 'add employee'){
        addEmployee();
      }else if (answer.action === 'add role'){
        addRole();
      }else if (answer.action === 'add department'){
      addDepartment();
      }else if (answer.action === 'update role'){
      updateRole();
      }else if(answer.action === 'exit'){
        connection.end();
      }
      
    })
  }


function viewEmployee  () {
  var query= "SELECT * FROM employee";    
connection.query(query, function (err, res) {
  console.log(`EMPLOYEE:`)
  res.forEach(employee => {
    console.log(`ID: ${employee.id} | Name: ${employee.first_name} ${employee.Last_name}  | Role ID: ${employee.role_id} | Manager ID: ${employee.manager_id}`);
  
  })
  runSearch();
});
};

function viewRole () {
  var query= "SELECT * FROM role";
  connection.query(query, function (err, res) {
    console.log(`ROLE:`)
    res.forEach(role => {
      console.log(`ID: ${role.id}| Title: ${role.title} | Salary: ${role.salary} | Department ID : ${role.department_id}`);

    })
    runSearch();
  });
};


function viewDepartment () {
  var query= "SELECT * FROM department";
  connection.query(query, function (err, res) {
    console.log(`DEPARTMENT:`)
    res.forEach(department => {
      console.log(`ID: ${department.id}| Name: ${department.name}`)
    })
    runSearch();
  });
};




