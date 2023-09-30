// Import necessary packages and create an Express application.
const express = require("express");
const cors = require("cors");
const app = express();

// Configure CORS options to allow requests from "http://localhost:8081".
var corsOptions = {
  origin: "http://localhost:8081"
};

// Enable CORS with the specified options.
app.use(cors(corsOptions));

// Enable JSON parsing and URL-encoded data parsing for incoming requests.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Sequelize database models and sync them with the database.
const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Banco sincronizado com sucesso!"); // Database sync successful
  })
  .catch((err) => {
    console.log("Falha ao acessar o banco de dados: " + err.message); // Database access failure
  });

// Define routes for various entities using separate route files.
require("./app/routes/address.routes")(app);
require("./app/routes/person.routes")(app);
require("./app/routes/employer.routes")(app);
require("./app/routes/client.routes")(app);
require("./app/routes/buy_sell.routes")(app);

// Create a simple "Hello World" route for the root URL.
app.get("/", (req, res) => {
  res.json({ message: 'Olá! A API conseguiu estabelecer uma conexão.' }); // Hello message for root URL
});

// Start the server on the specified port (default: 8080).
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server funcionando na porta ${PORT}.`); // Server is running on the specified port
});


/*
const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Banco sincronizado com sucesso!");
  })
  .catch((err) => {
    console.log("Falha ao acessar o banco de dados: " + err.message);
  });

require("./app/routes/address.routes")(app);
require("./app/routes/person.routes")(app);
require("./app/routes/employer.routes")(app);
require("./app/routes/client.routes")(app);
require("./app/routes/buy_sell.routes")(app);

app.get("/", (req, res) => {
  res.json({ message: 'Olá! A API conseguiu estabelecer uma conexão.' })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server funcionando na porta ${PORT}.`);
});
*/







