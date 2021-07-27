const mysql = require('mysql');
const config = require('../config/server');

const pool_db = mysql.createPool(config.MYSQL);

const dbHelper = (function(){

    const select_db = function (query, params, cb) {
        pool_db.on('connection', function(connection) {
            connection.on('enqueue', function (sequence) {
                if ('Query' === sequence.constructor.name) {
                    console.info(sequence.sql);
                }
            });
        });

        pool_db.getConnection(function (error, connection) {
            if (error) {
                if (connection) {
                    connection.release();
                }
                console.error('pool_db getConnection error : ' + error);
                cb(error);
                return;
            }

            connection.query(query, params, function (error, results, fields) {
                if (error) {
                    if (connection) {
                        connection.release();
                    }
                    cb(error);
                    return;
                }

                if (connection) {
                    connection.release();
                }
                cb(error, results);
            });
        });
    };


    return {
        'select_db' : select_db,
    }
})();

module.exports = dbHelper;