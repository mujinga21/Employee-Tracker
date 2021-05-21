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
  database: "employee_trackerDB",
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

const runSearch = () => {
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
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "view all employees":
          queryAllEmployee();
          break;
        case "View all employees by manager":
          queryEmployeeByManager();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "Remove employee":
          queryAllEmployee();
          break;
        case "Update employee role":
          queryAllEmployee();
          break;
        case "Update employee manager":
          queryAllEmployee();
          break;
        default:
          
          connection.end();
      }
    });
};


const queryAllEmployee = () => {
  connection.query("SELECT employee.id,employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(manager.first_name, ' ', manager.last_name)AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"),
  (err, res) => {
    if (err) throw err;
    res.forEach(({ id, first_name, last_name, title, department, salary, manager }) => {
      console.log(`${id} | ${first_name} | ${last_name} | ${title} | ${department} | ${salary} | ${manager}`);
    });
    runSearch();
  }
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







