module.exports = (sequelize, Sequelize) => {
    // Define the "BUY_SELL" model using Sequelize.
    const BUY_SELL = sequelize.define("buy_sell", {
        id_sell: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        pay_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        sell_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        discount: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    }, {
        tableName: 'Buy_Sell' // Specify the table name (with a capital initial letter) forcibly.
    });

    // Add associations with the "Client" model. 
    BUY_SELL.belongsTo(sequelize.models.client, {  
        foreignKey: 'id_client',
        as: 'client'
    });

    // Add associations with the "Employer" model. 
    BUY_SELL.belongsTo(sequelize.models.employer, {
        foreignKey: 'id_employer',
        as: 'employer'
    });

    return BUY_SELL; // Export the "BUY_SELL" model.
};

/* Exemplo de relação muitos pra muitos
Movie.belongsToMany(Actor, { through: 'ActorMovies' });
Actor.belongsToMany(Movie, { through: 'ActorMovies' });
*/


