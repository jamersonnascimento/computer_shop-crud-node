// Import the person controller module.
module.exports = (app) => {
  const address = require("../controllers/address.controller.js");

  // Import necessary modules for routing.
  var router = require("express").Router();

  // Define API routes for address-related operations.
  // Create a new address
  router.post("/", address.createAddress);

  // Return all address
  router.get("/", address.findAllAddress);

  // return all address by ID
  router.get("/:id_address", address.findOneAddressId);

  // Update a address by ID
  router.put("/:id_address", address.updateAddress);

  // Delete address by ID
  router.delete("/:id_address", address.deleteAddressId);

  // Delete all address
  router.delete("/", address.deleteAllAddress);

  // Define the base API endpoint for address-related operations.
  app.use('/api/address', router);
};


