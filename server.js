const inquirer = require('inquirer');
const connection = require('./db/connection');
const Department = require('./lib/Department');

async function init() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'Add a department',
            'Exit'
        ]
    });

    switch (action) {
        case 'View all departments':
            const department = new Department(connection);
            await department.viewAll();
            break;
        case 'Add a department':
            // Call method to add a department
            break;
        default:
            connection.end();
            break;
    }

    init();
}

init();
