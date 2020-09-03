const mysql = require('mysql');
var express = require("express");

var app = express();

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'Wediharewya1',
    database: 'seinfeild'
  });


  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });  

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/cast', function (req, res) {
    res.sendFile(path.join(__dirname, 'view.html'));
  });
  
  app.get('/coolness-chart', function (req, res) {
    res.sendFile(path.join(__dirname, 'add.html'));
  });
  
  // Displays all characters
  app.get('/attitude-chart/:att', function (req, res) {
    return res.json(characters);
  });
  