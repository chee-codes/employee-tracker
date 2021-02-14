const mysql = require("mysql");
const inquirer = require("inquirer");
const { clear } = require("console");
const { allowedNodeEnvironmentFlags } = require("process");
require("console.table");

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
        "View All Departments",
        "View All Roles",
        "Add Employee",
        "Remove Employee",
        "Update Employee",
      ],
    })
    .then((res) => {
      switch (res.selection) {
        case "View All Employees":
          allEmployees();
          break;
        case "View All Departments":
          allDept();
          break;
        case "View All Roles":
          allRoles();
          break;
        case "Add Employee":
          addEmp();
          break;
        case "Remove Employee":
          removeEmp();
          break;
      }
    });
};

const allEmployees = () => {
  const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, CONCAT(manager.first_name,' ',manager.last_name) AS manager, department.name FROM employee
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN department ON role.department_id = department.id
  LEFT JOIN employee manager ON employee.manager_id = manager.id`;

  connection.query(query, (err, res) => {
    if (err) throw err;
    //console.log(res);
    console.table("\n", res);

    getInfo();
  });
};

const allDept = () => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table("\n", res);
    getInfo();
  });
};

const allRoles = () => {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table("\n", res);
    getInfo();
  });
};

const addEmp = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "fName",
        message: "Please enter employees first name.",
      },
      {
        type: "input",
        name: "lName",
        message: "Please enter employees last name.",
      },
      {
        type: "input",
        name: "roleId",
        message: "Please enter the employees role ID?",
      },
      {
        type: "input",
        name: "manageId",
        message: "Please enter the employees manager ID",
      },
    ])
    .then((data) => {
      const query = "INSERT INTO employee SET ?";
      connection.query(
        query,
        {
          first_name: data.fName,
          last_name: data.lName,
          role_id: data.roleId,
          manager_id: data.manageId,
        },
        (err, res) => {
          if (err) throw err;
          console.table("\n", allEmployees(res));
        }
      );
    });
};

const removeEmp = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;

    inquirer
      .prompt([
        {
          type: "list",
          name: "remove",
          message: "Pleae choose which employee you would like to remove",
          choices: res.map((emp) => {
            return {
              name: `${emp.first_name} ${emp.last_name}`,
              value: emp.id,
            };
          }),
        },
      ])
      .then((data) => {
        connection.query(
          "DELETE FROM employee WHERE ?",
          [{ id: data.remove }],
          (err) => {
            if (err) throw err;
            console.table(allEmployees(res));
          }
        );
      });
  });
};
