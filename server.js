

const mysql = require("mysql2");
const inquirer = require("inquirer");



const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "1234",
  database: "employee_tracker",
});
connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

// const queryAllEmployee = () => {
//   connection.query("SELECT * FROM employee", (err, res) => {
//     if (err) throw err;
//     res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
//       console.log(
//         `${id} | ${first_name} | ${last_name} | ${role_id} | ${manager_id}`
//       );
//     });
//     console.log("-----------------------------------");
//     runSearch();
//   });
// };

function runSearch  () {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "view all employees",
        "View all employees by manager",
        "Add employee",
        "Remove employee",
        "Update employee role",
        "Update employee manager",
        "Exit",
      ]
    })
    .then(function(answer) {
      if(answer.action === 'view all employees'){
        viewEmployee();
      }else if (answer.action === 'view all employee by manager'){
        viewAllEmployeeByManager();
      }else if (answer.action === 'add  employee'){
        addEmployee();
      }else if (answer.action === 'remove an employee'){
        RemoveEmployee();
      }else if (answer.action === 'Update employee role'){
      updateEmployee();
      }else if (answer.action === 'update employee manager'){
      updateEmployee();
      }else if(answer.action === 'exit'){
        connection.end();
      }
      
    })
  }
//     .then((answer) => {
//       console.log('answer', answer);
//       switch (answer.action) {
//         case "view all employees":
//            viewAllEmployee();
//            break;
      
//         case "View all employees by manager":
//           viewEmployeeByManager();
//           break;
        
//         case "Add employee":
//            addEmployee();
//            break;
          
//         case "Remove employee":
//            removeEmployee();
//            break;
        
//         case "Update employee role":
//            updateEmployeeRole();
//            break;
        
//         case "Update employee manager":
//            updateEmployeeManager();
//            break;
          
//         case "exit":
//           connection.end();
//           break;
//       }
//     });
// };


function viewEmployee  () {
  var query= "SELECT * FROM employee";    
connection.query(query, function (err, res) {
  console.log(`Employee:`)
  res.forEach(employee => {
    console.log(`ID: $(employee.id'| Name: ${employee.first_name} ${employee.Last_name}  | Role ID: ${employee.role_id} | Manager ID: ${employee.manager_id}`);
  
  })
  runSearch();
});
};








// const queryEmployeeByManager = () => {
//   inquirer .prompt({
//       name: 'manager_name',
//       type: 'list',
//       message: 'employee's manager:'
//     })
//     .then((answer) => {
//       let query =
//         'SELECT CONCAT(manager.first_name,'', manager.last_name)
//       query +=
//         'FROM  INNER JOIN role ON(role_id = employee.role_id && employee:manager_id = 'NULL');
//       query +=
//         '= department(department.id= role.department_id) WHERE (t;

//       connection.query(query, [answer.artist, answer.artist], (err, res) => {
//         console.log(`${res.length} matches found!`);
//         res.forEach(({ year, position, artist, song, album }, i) => {
//           const num = i + 1;
//           console.log(
//             `${num} Year: ${year} Position: ${position} || Artist: ${artist} || Song: ${song} || Album: ${album}`
//           );
//         });

//         runSearch();
//       });
//     });
// };




// const addEmployee = () => {
//   console.log("Inserting a new employee...\n");

// };





