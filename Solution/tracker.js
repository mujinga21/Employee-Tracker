const mysql = require("mysql2");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "kazadi42!",
  database: "employee_trackerDB",
});
connection.connect((err) => {
    if (err) throw err;
    runSearch();
  });
  
  const runSearch = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'view all employees',
          'View all employees by manager',
          'Add employee',
          'Remove employee',
          'Update employee role',
          'Update employee manager',
        ],
      })
  
    .then((answer) => {
      switch (answer.action) {
    

        case 'view all employees':
          employeeSearch();
          break;




        case 'view employees by manager':
          rangeSearch();
          break;

        case 'Add employee':
          songSearch();
          break;

        case 'Find artists with a top song and top album in the same year':
          songAndAlbumSearch();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
          connection.end();
      }
    });
  };
  
      const employeeSearch = () => {
        connection.query("SELECT * FROM employee", (err, res) => {
          if (err) throw err;
      
          // Log all results of the SELECT statement
          console.log(res);
          // connection.end();
        });
    }
    addEmployee: (req, res) => {
      if (err) throw err;
    }
    let message = '';
    let first_name =
    

// const employeeByManagerSearch = () => {
//   inquirer
//     .prompt({
//       name: 'employee',
//       type: 'input',
//       message: 'What manager employee would you like to view?',
//     })
//     .then((answer) => {
//       let query =
//      'SELECT employee.role_id, employee.first_name, employee.last_name, role.salary, role.title ';
//       query +=
//         'FROM employee INNER JOIN role ON (employee.id and role.id ';
//       query +=
//         '= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year, top_albums.position';

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

