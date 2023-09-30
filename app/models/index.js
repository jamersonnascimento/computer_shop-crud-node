// Import necessary modules and configurations.
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Create a new Sequelize instance with the provided database configuration.
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    },
    logging: true // Enable Sequelize logging.
  });
  
// Create an object to store references to Sequelize and the Sequelize instance.
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import and associate the various models with the Sequelize instance.
db.Address = require("./address.model.js")(sequelize, Sequelize);
db.Person = require("./person.model.js")(sequelize, Sequelize);
db.Employer = require("./employer.model.js")(sequelize, Sequelize);
db.Client = require("./client.model.js")(sequelize, Sequelize);
db.Buy_Sell = require("./buy_sell.model.js")(sequelize, Sequelize);

module.exports = db; // Export the db object.



  