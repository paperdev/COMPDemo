const config = {

    SERVER : {
        PORT : {
            HTTP    : 7777,
            HTTPS   : 7443
        },
        CLUSTER     : false,
    },

    MYSQL : {
        connectionLimit     : 10,
        host                : "localhost",
        user                : "root",
        password            : "1234",
        database            : "TestDB"
    },
    
};

module.exports = config;