'use strict';

const connection = require('./coonecton');

// module.exports = new DB(connection)

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllTitles() {
        return this.connection.query(
            `
        SELECT
            title.id,
            title.name AS Title,
            title.salary AS Salary,
            house.name AS House
        FROM
            title
        LEFT JOIN
            house ON title.house_id = house.id
        ORDER BY
            title.id;
            `
        );
    }
 
    }
    viewAllTitles() {
        return this.connection.query(
            `
        SELECT
            house.id,
            house.name
        FROM
         house
        ORDER BY
            house.id;
            `
        );
    }

viewAllhouses() {
    return this.connection.query(
        `
    SELECT
        title.id,
        title.name AS Title,
        title.salary AS Salary,
        house.name AS House
    FROM
        title
    LEFT JOIN
        house ON title.house_id = house.id
    ORDER BY
        title.id;
        `
    );
    }

    // module.exports = new DB(connection)