module.exports = (sequelize, Sequelize) => {
    // Define the "Client" model using Sequelize.
    const Client = sequelize.define("client", {
        id_client: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        client_type: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        pag_method: { // Payment method
            type: Sequelize.STRING(20),
            allowNull: false
        },
        reg_date: { // Registration date
            type: Sequelize.DATE
        },
        have_cred_restr: { // Has credit restriction?
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: 'Client' // Specify the table name (with a capital initial letter) forcibly.
    });

    // Add an association with the "Person" model.
    Client.belongsTo(sequelize.models.person, {
        foreignKey: 'id_person',
        as: 'person'
    });

    return Client; // Export the "Client" model.
};


