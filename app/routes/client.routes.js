// Import the Client controller to handle Client-related requests.
module.exports = (app) => {
    const client = require("../controllers/client.controller.js");

    // Create a new Express Router instance.
    var router = require("express").Router();

    // Define routes for Client-related operations.

    // Create a new Client entry.
    router.post("/", client.createClient);

    // Retrieve all Clients.
    router.get("/", client.findAllClient);

    // Inner Join that retrieves Clients associated with Persons.
    router.get("/clients-with-person", client.findAllClientWithPerson); // This route had to be placed before the findOneClientId function for it to work.

    // Retrieve a Client by its ID.
    router.get("/:id_client", client.findOneClientId);

    // Update a Client by its ID.
    router.put("/:id_client", client.updateClient);

    // Delete a Client by its ID.
    router.delete("/:id_client", client.deleteClientId);

    // Delete all Clients.
    router.delete("/", client.deleteAllClient);

    // Retrieve credit restrictions.
    router.get("/credit_restr", client.findCreditRestriction);

    // Register the Client routes under the '/api/client' URL path.
    app.use('/api/client', router);
};


  