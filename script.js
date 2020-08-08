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
