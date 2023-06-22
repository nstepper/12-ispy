const inquirer = require("inquirer");

class Role {
    constructor(connection) {
        this.connection = connection;
    }

    // Method to view all roles
    async viewAll() {
        const [rows, fields] = await this.connection.promise().query("SELECT * FROM role");
        console.table(rows);
    }

    // Method to add a role
    async add() {
        const { title, salary, department_id } = await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of the role?",
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary of the role?",
            },
            {
                type: "input",
                name: "department_id",
                message: "What is the ID of the department this role belongs to?",
            },
        ]);

        const [rows, fields] = await this.connection.promise().query(
            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
            [title, salary, department_id]
        );
        console.log("Role added successfully!");
    }
}

module.exports = Role;
