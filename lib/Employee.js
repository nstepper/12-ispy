const inquirer = require("inquirer");

class Employee {
    constructor(connection) {
        this.connection = connection;
    }

    // Method to view all employees
    async viewAll() {
        const [rows, fields] = await this.connection.promise().query("SELECT * FROM employee");
        console.table(rows);
    }

    // Method to add an employee
    async add() {
        const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the first name of the employee?",
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the last name of the employee?",
            },
            {
                type: "input",
                name: "role_id",
                message: "What is the ID of the role this employee belongs to?",
            },
            {
                type: "input",
                name: "manager_id",
                message: "What is the ID of this employee's manager?",
            },
        ]);

        const [rows, fields] = await this.connection.promise().query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
            [first_name, last_name, role_id, manager_id]
        );
        console.log("Employee added successfully!");
    }
}

module.exports = Employee;
