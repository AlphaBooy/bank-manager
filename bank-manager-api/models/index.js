const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    timezone: dbConfig.timezone,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize        = Sequelize;
db.sequelize        = sequelize;

db.depenses         = require("./depenses.model.js")(sequelize, Sequelize);
db.revenus          = require("./revenus.model.js")(sequelize, Sequelize);
db.beneficiaires    = require("./beneficiaires.model.js")(sequelize, Sequelize);
db.crediteurs       = require("./crediteurs.model.js")(sequelize, Sequelize);
db.categories       = require("./categories.model.js")(sequelize, Sequelize);
db.crypto            = require("./cryptos.model.js")(sequelize, Sequelize);

module.exports = db;
