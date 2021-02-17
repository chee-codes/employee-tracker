USE employeeDB;


INSERT INTO department (name)
VALUES ('Management');

INSERT INTO department(name)
VALUES ('Developement');

INSERT INTO department (name)
VALUES ("Design");


INSERT INTO role (title, salary, department_id)
VALUES ('Project Manager', 250000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Ast Project Manager", 200000.00, 1);

INSERT INTO role(title, salary, department_id)
VALUES ('Senior Developer', 150000.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Junior Developer", 95000.00, 4);

INSERT INTO role (title, salary, department_id)
VALUES ('UX/UI Designer', 90000.00, 5);

INSERT INTO role (title, salary, department_id)
VALUES ("Graphic Designer", 88000.00, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jaja', 'Brown', 1, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Staci', 'Breaux', 2, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ryan', 'Smith', 3, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Sandoval', 3, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mike', 'Jones', 3, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jane', 'Smith', 5, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Frank', 'Williams', 6, 2);

