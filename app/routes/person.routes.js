// Import the Person controller to handle Person-related requests.
module.exports = (app) => {
  const person = require("../controllers/person.controller.js");

  // Create a new Express Router instance.
  var router = require("express").Router();

  // Define routes for Person-related operations.

  // Create a new Person entry.
  router.post("/", person.createUser);

  // Retrieve all Persons.
  router.get("/", person.findAllUser);

  // Retrieve Persons with associated Addresses.
  router.get("/persons-with-address", person.findAllPersonWithAddress); // This route had to be placed before the findOneUserId function for it to work.

  // Retrieve a Person by their ID.
  router.get("/:id_person", person.findOneUserId);

  // Update a Person by their ID.
  router.put("/:id_person", person.updateUser);

  // Delete a Person by their ID.
  router.delete("/:id_person", person.deleteUserId);

  // Delete all Persons.
  router.delete("/", person.deleteAllUser);

  // Register the Person routes under the '/api/person' URL path.
  app.use('/api/person', router);
};


  /*
  module.exports = (app) => {
    const person = require("../controllers/person.controller.js");
  
    var router = require("express").Router();
  
    // Cria um novo usuário
    router.post("/", person.createUser);
  
    // Retorna todos os usuários
    router.get("/", person.findAllUser);

    // Retorna usuários com endereços
    router.get("/persons-with-address", person.findAllPersonWithAddress); //foi necessário colocar esta rota antes da função findOneUserId para que funcionasse
  
    // Retorna um usuário pelo ID
    router.get("/:id_person", person.findOneUserId);
  
    // Atualiza um usuário pelo ID
    router.put("/:id_person", person.updateUser);
  
    // Deleta um usuário pelo ID
    router.delete("/:id_person", person.deleteUserId);
  
    // Deleta todos os usuários
    router.delete("/", person.deleteAllUser);

    app.use('/api/person', router);
  };

  */

  