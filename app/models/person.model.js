module.exports = (sequelize, Sequelize) => {
    // Define the "Person" model using Sequelize.
    const Person = sequelize.define("person", {
        id_person: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        telephone: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        cpf: {
            type: Sequelize.STRING(14),
            allowNull: false
        },
        birthdate: {
            type: Sequelize.DATE
        }
    }, {
        tableName: 'Person' // Specify the table name (with a capital initial letter).
    });

    // Set up an association with the "Address" table.
    Person.belongsTo(sequelize.models.address, {
        foreignKey: 'id_address',
        as: 'address'
    });

    return Person; // Export the "Person" model.
};





