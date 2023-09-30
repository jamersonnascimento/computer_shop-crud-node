const db = require("../models"); // Import the database models.
const Address = db.Address; // Create an instance of the Address model.
const Op = db.Sequelize.Op; // Import Sequelize operators for database queries.

// Create a new address record.
exports.createAddress = (req, res) => {
  if (!req.body.zip_code) { // Check if the "zip_code" field is empty.
    res.status(400).send({
      message: "The 'zip_code' field cannot be empty!"
    });
    return;
  }

  const address = {
    zip_code: req.body.zip_code,
    house_number: req.body.house_number,
    street: req.body.street,
    neighborhood: req.body.neighborhood,
    // No foreign key in this model.
  };

  Address.create(address).then(data => { // Create a new address record.
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "An error occurred while trying to create the address."
    });
  });
};

// Find all addresses based on a query parameter.
exports.findAllAddress = (req, res) => {
  const zip_code = req.query.zip_code; // Get the query parameter "zip_code".
  var condition = zip_code ? { zip_code: { [Op.like]: `%${zip_code}%` } } : null; // Use Sequelize operators to search for addresses.

  Address.findAll({ where: condition }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "An error occurred while trying to search for addresses."
    });
  });
};

// Find an address by its ID.
exports.findOneAddressId = (req, res) => {
  const id_address = req.params.id_address; // Get the address ID from the request parameters.

  Address.findByPk(id_address).then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Could not find an address with ID=${id_address}.`
      });
    };
  }).catch(err => {
    res.status(500).send({
      message: "An error occurred while trying to find an address with ID=" + id_address
    });
  });
};

// Update an existing address by its ID.
exports.updateAddress = (req, res) => {
  const id_address = req.params.id_address; // Get the address ID from the request parameters.

  Address.update(req.body, {
    where: { id_address: id_address }
  }).then(num => {
    if (num == 1) {
      res.send({
        message: "The address was updated."
      });
    } else {
      res.send({
        message: `Could not update the address with ID=${id_address}.`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: "An error occurred while trying to update the address with ID=" + id_address
    });
  });
};

// Delete an address by its ID.
exports.deleteAddressId = (req, res) => {
  const id_address = req.params.id_address; // Get the address ID from the request parameters.

  Address.destroy({
    where: { id_address: id_address }
  }).then(num => {
    if (num == 1) {
      res.send({
        message: "The address was successfully deleted."
      });
    } else {
      res.send({
        message: `Could not delete the address with ID=${id_address}.`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: "An error occurred while trying to delete the address with ID=" + id_address
    });
  });
};

// Delete all addresses.
exports.deleteAllAddress = (req, res) => {
  Address.destroy({
    where: {},
    truncate: false
  }).then(nums => {
    res.send({
      message: `${nums} addresses were successfully deleted!`
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message || "An error occurred while trying to delete all addresses."
    });
  });
};


