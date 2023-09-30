const db = require("../models"); // Import the database models.
const Person = db.Person; // Create an instance of the Person model.
const Op = db.Sequelize.Op; // Import Sequelize operators for database queries.

// Create a new user (person).
exports.createUser = (req, res) => {
  if (!req.body.name) { // Check if the "name" field is empty.
    res.status(400).send({
      message: "The 'name' field cannot be empty!"
    });
    return;
  }

  const person = {
    name: req.body.name,
    telephone: req.body.telephone,
    cpf: req.body.cpf,
    birthdate: req.body.birthdate,
    id_address: req.body.id_address
  };

  Person.create(person).then(data => { // Create a new user (person) record.
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "An error occurred while trying to create the user!"
    });
  });
};

// Find all users (people) based on a query parameter.
exports.findAllUser = (req, res) => {
  const cpf = req.query.cpf; // Get the query parameter "cpf".
  var condition = cpf ? { cpf: { [Op.like]: `%${cpf}%` } } : null; // Use Sequelize operators to search for users (people).

  Person.findAll({ where: condition }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "An error occurred while trying to search for users!"
    });
  });
};

// Find a user (person) by their ID.
exports.findOneUserId = (req, res) => {
  const id_person = req.params.id_person; // Get the user (person) ID from the request parameters.

  Person.findByPk(id_person).then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Could not find a user with ID: ${id_person}.`
      });
    };
  }).catch(err => {
    res.status(500).send({
      message: "An error occurred while trying to find a user with ID: " + id_person
    });
  });
};

// Update an existing user (person) by their ID.
exports.updateUser = (req, res) => {
  const id_person = req.params.id_person; // Get the user (person) ID from the request parameters.

  Person.update(req.body, {
    where: { id_person: id_person }
  }).then(num => {
    if (num == 1) {
      res.send({
        message: "The user was updated!"
      });
    } else {
      res.send({
        message: `Could not update the user with ID: ${id_person}.`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: "An error occurred while trying to update the user with ID: " + id_person
    });
  });
};

// Delete a user (person) by their ID.
exports.deleteUserId = (req, res) => {
  const id_person = req.params.id_person; // Get the user (person) ID from the request parameters.

  Person.destroy({
    where: { id_person: id_person }
  }).then(num => {
    if (num == 1) {
      res.send({
        message: "The user was successfully deleted!"
      });
    } else {
      res.send({
        message: `Could not delete the user with ID: ${id_person}.`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: "An error occurred while trying to delete the user with ID: " + id_person
    });
  });
};

// Delete all users (people).
exports.deleteAllUser = (req, res) => {
  Person.destroy({
    where: {},
    truncate: false
  }).then(nums => {
    res.send({
      message: `${nums} users were successfully deleted!`
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message || "An error occurred while trying to delete all users!"
    });
  });
};

// Find all people with associated address records (Inner Join between Person and Address).
exports.findAllPersonWithAddress = (req, res) => {
  Person.findAll({
    include: [{
      model: db.Address,
      as: 'address'
    }]
  }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "An error occurred while trying to fetch people with addresses."
    });
  });
};








