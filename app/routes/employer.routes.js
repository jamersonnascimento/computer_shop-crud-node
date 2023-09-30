// Import the Employer controller to handle Employer-related requests.
module.exports = (app) => {
    const employer = require("../controllers/employer.controller.js");

    // Create a new Express Router instance.
    var router = require("express").Router();

    // Define routes for Employer-related operations.

    // Create a new Employer entry.
    router.post("/", employer.createEmployer);

    // Retrieve all Employers.
    router.get("/", employer.findAllEmployer);

    // Inner Join that retrieves Employers associated with Persons.
    router.get("/employers-with-person", employer.findAllEmployerWithPerson); // This route had to be placed before the findOneEmployerId function for it to work.

    // Retrieve an Employer by their ID.
    router.get("/:id_person", employer.findOneEmployerId);

    // Update an Employer by their ID.
    router.put("/:id_person", employer.updateEmployer);

    // Delete an Employer by their ID.
    router.delete("/:id_person", employer.deleteEmployerId);

    // Delete all Employers.
    router.delete("/", employer.deleteAllEmployer);

    // Register the Employer routes under the '/api/employer' URL path.
    app.use('/api/employer', router);
};

  