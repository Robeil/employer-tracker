'use strict';
const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'Wediharewya1',
    database: 'employee_data'
  });


  connection.connect(function(err) {
    if (err) {

      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });  

connection.connect();

// setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await sytax
connection.query = util.promisify(connection.query);


module.exports = connection;


