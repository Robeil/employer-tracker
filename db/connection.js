'use strict';

const mysql = require('mysql');
const util = require('util');
//creating connection to mysql workbench
const connection = mysql.createConnection({
    host: 'localhost',
    
    port: 3306,
 
    user: 'root',

    password: 'Wediharewya1',
    database: 'employee_db'
  });

connection.connect();
connection.query = util.promisify(connection.query);


module.exports = connection;


