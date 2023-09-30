module.exports = (sequelize, Sequelize) => {
    // Define the "Employer" model using Sequelize.
    const Employer = sequelize.define("employer", {
        id_employer: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        position: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        salary: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        hire_date: {
            type: Sequelize.DATE
        }
    }, {
        tableName: 'Employer' // Specify the table name (with a capital initial letter).
    });

    // Add an association with the "Person" model.
    Employer.belongsTo(sequelize.models.person, {
        foreignKey: 'id_person',
        as: 'person'
    });

    return Employer; // Export the "Employer" model.
};






