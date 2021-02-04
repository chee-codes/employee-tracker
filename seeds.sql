
INSERT INTO department (name)
VALUES ('Management'), ('Developement'), ("Design");


INSERT INTO roles (title, salary, department_id)
VALUES ('Project Manager', 250,000, 1), ('Full Stack Developer', 150,000, 2), ('UX/UI Designer', 97,000, 3);


INSERT INTO employee (first_name, last_name, role_id, Manager_id)
VALUES ('Jaja', 'Brown', 1), ('Staci', 'Breaux', 2, 1), ('Mike', 'Smith', 2, 1);
