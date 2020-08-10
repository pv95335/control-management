const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "pv95335976!",
  database: "con_manage",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected as id" + connection.threadId + "\n");
  startProject();
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

addEmployee = () => {
  console.log("Adding new employee...\n");
};

updateEmployeeInfo = () => {};

deleteEmployee = () => {};

readInfo = () => {};

connection.query(
  'SELECT * FROM `id` WHERE `employeeinfo` = "employeefirst" AND `Max`',
  function (err, results, fields) {
    console.log(results);
    console.log(fields);
  }
);

// startProject();
