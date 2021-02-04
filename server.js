const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employeeDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
  getInfo();
});

const getInfo = () => {
  inquirer
    .prompt({
      type: "list",
      name: "selection",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees by Department",
        "View All Employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
      ],
    })
    .then((res) => {
      if (res.selection === "View All Employees") {
        allEmployees();
      } else if (res.selection === "View All Employees by Department") {
        allDept();
      }
    });
};

const allEmployees = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table("\n", res);
  });
};

const allDept = () => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table("\n", res);
  });
};
