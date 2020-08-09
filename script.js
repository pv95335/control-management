const mysql = require("mysql2/promise");
const cTable = require("console.table");
const inquirer = require("inquirer");

const connection = await mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "pv95335976!",
  database: "con_manage",
});

const startProject = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "employeedatabse",
      message: "Please choose your options:",
      choices: options,
    },
  ]);
};

const options = [
  "View all employees",
  "View all employees by department",
  "View all employees by management",
  "Add employee",
  "Remove employee",
  "Update employee information",
  "Update employee manager",
];

// addEmployee = () => {
//   console.log("Adding new employee...\n");
//   const query = connection.query(
//     "INSERT INTO id SET ?",
//     {
//       employeefirstname: "Jak",
//       employelastname: "Bridges",
//       employeetitle: "Head Chef",
//       department: "Kitchen",
//       salary: "42,000",
//       manager: "Sherlock Holms",
//     },
//     function (err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + "employee added!\n");
//       updateRoster();
//     }
//   );
//   console.log(query.sql);
// };

// updateEmployeeInfo = () => {
//   console.log("Updating database...\n");
//   const query = connection.query(
//     [
//       {
//         salary: 500,
//       },
//       {
//         department: "closet",
//       },
//     ],
//     function (err, res) {
//       if (err) throw err;
//       console.table(`${res.affectedRows} updated info!\n`);
//       deleteInfo();
//     }
//   );
//   console.log(query.sql);
// };

// deleteEmployee = () => {
//     console.log("Deleteing information...\n");
//     const query = connection.query(
//         "DELETE FROM employeeinfo WHERE ?",
//         function (err, res) {
//             if(err) throw err;
//             console.table(res.affectedRows + 'Employee removed!');
//             readInfo();
//         }
//     ),
// };

// readInfo = () => {
//     console.log("Selecting all info ... \n");
//     const query = connection.query(
//         "SELECT * FROM employeeinfo",

//         function (err, res) {
//             if(err) throw err;
//             console.table(res);
//             connection.end();
//         }
//     )
// }

// connection.query(
//   'SELECT * FROM `id` WHERE `employeeinfo` = "employeefirst" AND `Max`',
//   function (err, results, fields) {
//     console.log(results);
//     console.log(fields);
//   }
// );

startProject();
