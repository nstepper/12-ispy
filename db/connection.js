const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'employee_tracker'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected as id ' + connection.threadId + '\n');
});

module.exports = connection;
