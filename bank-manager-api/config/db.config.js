module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "bank-manager",
    PORT: 3306,
    dialect: "mariadb",
    timezone: '+01:00',
    dialectOptions: {
        useUTC: false //for reading from database
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
