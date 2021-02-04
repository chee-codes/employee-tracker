const mysql = require("mysql");
const inquirer = require("inquirer");
const prompts = require("./prompts.js");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employeeDB",
});
