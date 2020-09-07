'use strict';

const connection = require('./coonecton');

// classes the connection

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    end() {
        connection.end();
    };

  

module.exports = new DB(connection)
