const db = require("../models"); // Import the database models.
const Client = db.Client; // Create an instance of the Client model.
const Op = db.Sequelize.Op; // Import Sequelize operators for database queries.

// Create a new client.
exports.createClient = (req, res) => {
    if (!req.body.password) { // Check if the "password" field is empty.
        res.status(400).send({
            message: "The 'password' field cannot be empty!"
        });
        return;
    }

    const client = {
        client_type: req.body.client_type,
        password: req.body.password,
        pag_method: req.body.pag_method,
        reg_date: req.body.reg_date,
        have_cred_restr: req.body.have_cred_restr, // Does the client have credit restrictions?
        id_person: req.body.id_person
    };

    Client.create(client).then(data => { // Create a new client record.
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to create the client!"
        });
    });
};

// Find all clients based on a query parameter.
exports.findAllClient = (req, res) => {
    const client_type = req.query.client_type; // Get the query parameter "client_type".
    var condition = client_type ? { client_type: { [Op.like]: `%${client_type}%` } } : null; // Use Sequelize operators to search for clients.

    Client.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to search for clients!"
        });
    });
};

// Find a client by their ID.
exports.findOneClientId = (req, res) => {
    const id_client = req.params.id_client; // Get the client ID from the request parameters.

    Client.findByPk(id_client).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Could not find a client with ID: ${id_client}.`
            });
        };
    }).catch(err => {
        res.status(500).send({
            message: "An error occurred while trying to find a client with ID: " + id_client
        });
    });
};

// Update an existing client by their ID.
exports.updateClient = (req, res) => {
    const id_client = req.params.id_client; // Get the client ID from the request parameters.

    Client.update(req.body, {
        where: { id_client: id_client }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "The client was updated!"
            });
        } else {
            res.send({
                message: `Could not update the client with ID: ${id_client}.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "An error occurred while trying to update the client with ID: " + id_client
        });
    });
};

// Delete a client by their ID.
exports.deleteClientId = (req, res) => {
    const id_client = req.params.id_client; // Get the client ID from the request parameters.

    Client.destroy({
        where: { id_client: id_client }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "The client was successfully deleted!"
            });
        } else {
            res.send({
                message: `Could not delete the client with ID: ${id_client}.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "An error occurred while trying to delete the client with ID: " + id_client
        });
    });
};

// Delete all clients.
exports.deleteAllClient = (req, res) => {
    Client.destroy({
        where: {},
        truncate: false
    }).then(nums => {
        res.send({
            message: `${nums} clients were successfully deleted!`
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to delete all clients!"
        });
    });
};

// Find clients with credit restrictions.
exports.findCreditRestriction = (req, res) => {
    Client.findAll({ where: { have_cred_restr: true } }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to search for all credit restrictions."
        });
    });
};

// Find all clients with associated person records (Inner Join between Client and Person).
exports.findAllClientWithPerson = (req, res) => {
    Client.findAll({
        include: [{
            model: db.Person,
            as: 'person'
        }]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to fetch clients associated with users."
        });
    });
};


