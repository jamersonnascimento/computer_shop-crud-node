const db = require("../models"); // Import the database models.
const Employer = db.Employer; // Create an instance of the Employer model.
const Op = db.Sequelize.Op; // Import Sequelize operators for database queries.

// Create a new employer.
exports.createEmployer = (req, res) => {
    if (!req.body.password) { // Check if the "password" field is empty.
        res.status(400).send({
            message: "The 'password' field cannot be empty!"
        });
        return;
    }

    const employer = {
        position: req.body.position,
        password: req.body.password,
        salary: req.body.salary,
        hire_date: req.body.hire_date,
        id_person: req.body.id_person
    };

    Employer.create(employer).then(data => { // Create a new employer record.
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to create the employee!"
        });
    });
};

// Find all employers based on a query parameter.
exports.findAllEmployer = (req, res) => {
    const position = req.query.position; // Get the query parameter "position".
    var condition = position ? { position: { [Op.like]: `%${position}%` } } : null; // Use Sequelize operators to search for employers.

    Employer.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to search for employees!"
        });
    });
};

// Find an employer by their ID.
exports.findOneEmployerId = (req, res) => {
    const id_employer = req.params.id_employer; // Get the employer ID from the request parameters.

    Employer.findByPk(id_employer).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Could not find an employee with ID: ${id_employer}.`
            });
        };
    }).catch(err => {
        res.status(500).send({
            message: "An error occurred while trying to find an employee with ID: " + id_employer
        });
    });
};

// Update an existing employer by their ID.
exports.updateEmployer = (req, res) => {
    const id_employer = req.params.id_employer; // Get the employer ID from the request parameters.

    Employer.update(req.body, {
        where: { id_employer: id_employer }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "The employee was updated!"
            });
        } else {
            res.send({
                message: `Could not update the employee with ID: ${id_employer}.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "An error occurred while trying to update the employee with ID: " + id_employer
        });
    });
};

// Delete an employer by their ID.
exports.deleteEmployerId = (req, res) => {
    const id_employer = req.params.id_employer; // Get the employer ID from the request parameters.

    Employer.destroy({
        where: { id_employer: id_employer }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "The employee was successfully deleted!"
            });
        } else {
            res.send({
                message: `Could not delete the employee with ID: ${id_employer}.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "An error occurred while trying to delete the employee with ID: " + id_employer
        });
    });
};

// Delete all employers.
exports.deleteAllEmployer = (req, res) => {
    Employer.destroy({
        where: {},
        truncate: false
    }).then(nums => {
        res.send({
            message: `${nums} employees were successfully deleted!`
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to delete all employees!"
        });
    });
};

// Find all employers with associated person records (Inner Join between Employer and Person).
exports.findAllEmployerWithPerson = (req, res) => {
    Employer.findAll({
        include: [{
            model: db.Person,
            as: 'person'
        }]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to fetch employees associated with users."
        });
    });
};


