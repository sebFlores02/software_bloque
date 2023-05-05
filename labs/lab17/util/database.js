const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'instagram_labs',
    password: ''
});

module.exports = pool.promise();