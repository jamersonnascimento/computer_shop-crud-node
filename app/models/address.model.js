module.exports = (sequelize, Sequelize) => {
    // Define the "Address" model with Sequelize.
    const Address = sequelize.define("address", {
        id_address: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        zip_code: {
            type: Sequelize.STRING(8),
            allowNull: false
        },
        house_number: {
            type: Sequelize.STRING(8),
            allowNull: false
        },
        street: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        neighborhood: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    }, {
        tableName: 'Address' // Specify the table name (with a capital initial letter) forcibly.
    });

    return Address; // Export the "Address" model.
};

