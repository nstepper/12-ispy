-- Use the database
USE employee_tracker;

-- Insert departments
INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

-- Insert roles
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1), ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2), ('Software Engineer', 120000, 2),
       ('Accountant', 70000, 3), ('Legal Team Lead', 110000, 4),
       ('Lawyer', 90000, 4);

-- Insert employees
-- Note: the manager_id field is null for the first employee because they have no manager
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL), ('Jane', 'Smith', 2, 1),
       ('Mary', 'Johnson', 3, 1), ('James', 'Brown', 4, 2),
       ('Emily', 'Davis', 5, 2), ('Michael', 'Miller', 6, 3),
       ('Elizabeth', 'Taylor', 7, 3);
