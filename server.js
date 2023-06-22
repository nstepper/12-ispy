const inquirer = require('inquirer');
const dotenv = require('dotenv');
const Department = require('./lib/Department');
const Role = require('./lib/Role');
const Employee = require('./lib/Employee');
const connection = require('./db/connection');

// Load environment variables
dotenv.config();

// Initial prompt
async function init() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'Add a department',
            'View all roles',
            'Add a role',
            'View all employees',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    });

    switch (action) {
        case 'View all departments':
            const department = new Department(connection);
            await department.viewAll();
            init();
            break;
        case 'Add a department':
            const newDepartment = new Department(connection);
            await newDepartment.add();
            init();
            break;
        case 'View all roles':
            const role = new Role(connection);
            await role.viewAll();
            init();
            break;
        case 'Add a role':
            const newRole = new Role(connection);
            await newRole.add();
            init();
            break;
        case 'View all employees':
            const employee = new Employee(connection);
            await employee.viewAll();
            init();
            break;
        case 'Add an employee':
            const newEmployee = new Employee(connection);
            await newEmployee.add();
            init();
            break;
        case 'Update an employee role':
            const newEmployeeRole = new Employee(connection);
            await newEmployeeRole.updateRole();
            init();
            break;
        default:
            connection.end();
            break;
    }
}

init();
