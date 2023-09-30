module.exports = {
  HOST: "localhost", // Database host, usually "localhost" if running locally.
  USER: "postgres", // Username for accessing the database.
  PASSWORD: "oyasuminasai", // Password for accessing the database. Make sure to secure this information.
  DB: "Computer_Shop", // Name of the database you want to connect to.
  dialect: "postgres", // The database dialect being used, in this case, it's PostgreSQL.
  pool: {
    max: 5, // Maximum number of connections in the connection pool.
    min: 0, // Minimum number of connections in the connection pool.
    acquire: 30000, // Maximum time (in milliseconds) that a connection can be idle before it's closed.
    idle: 10000 // Maximum time (in milliseconds) that a connection can be idle in the pool before it's closed.
  }
};