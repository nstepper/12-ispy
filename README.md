# 12-ispy

a command-line application that can  manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Installation

1. Clone the repository using the command 

- git clone https://github.com/nstepper/12-ispy.git

2. Navigate to the root of the directory and install the dependecies using the commands:

- npm install
- npm i inquirer@8.2.4 mysql2 console.table

3.Create a .env file in the root directory and fill in your MySQL credentials:

DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=employee_tracker_db

4. You can now run the application with the command:

- node index.js

## Demo 

![Demo GIF](./12-ispy.gif)


## License

Licensed by MIT