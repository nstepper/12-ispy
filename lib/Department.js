const inquirer = require("inquirer");

class Department {
    constructor(connection) {
        this.connection = connection;
    }

    // Method to view all departments
    async viewAll() {
        const [rows, fields] = await this.connection.promise().query("SELECT * FROM department");
        console.table(rows);
    }

    // Method to add a department
    async add() {
        const { name } = await inquirer.prompt({
            type: "input",
            name: "name",
            message: "What is the name of the department?",
        });

        const [rows, fields] = await this.connection.promise().query("INSERT INTO department (name) VALUES (?)", [name]);
        console.log("Department added successfully!");
    }
}

module.exports = Department;
