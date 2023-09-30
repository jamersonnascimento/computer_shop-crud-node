const db = require("../models"); // Import the database models.
const Buy_Sell = db.Buy_Sell; // Create an instance of the Buy_Sell model.
const Op = db.Sequelize.Op; // Import Sequelize operators for database queries.

// Create a new purchase/sale record.
exports.createBuy_Sell = (req, res) => {
    if (!req.body.total) { // Check if the "total" field is empty.
        res.status(400).send({
            message: "The 'total' field cannot be empty!"
        });
        return;
    }

    const buy_sell = {
        total: req.body.total,
        pay_date: req.body.pay_date,
        sell_date: req.body.sell_date,
        discount: req.body.discount,
        id_client: req.body.id_client,
        id_sell: req.body.id_sell
    };

    Buy_Sell.create(buy_sell).then(data => { // Create a new purchase/sale record.
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to create the purchase/sale record."
        });
    });
};

// Find all purchase/sale records based on a query parameter.
exports.findAllBuy_Sell = (req, res) => {
    const pay_date = req.query.pay_date; // Get the query parameter "pay_date".
    var condition = pay_date ? { pay_date: { [Op.like]: `%${pay_date}%` } } : null; // Use Sequelize operators to search for purchase/sale records.

    Buy_Sell.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to search for purchase/sale records."
        });
    });
};

// Find a purchase/sale record by its ID.
exports.findOneBuy_SellId = (req, res) => {
    const id_sell = req.params.id_sell; // Get the purchase/sale record ID from the request parameters.

    Buy_Sell.findByPk(id_sell).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Could not find a purchase/sale record with ID: ${id_sell}.`
            });
        };
    }).catch(err => {
        res.status(500).send({
            message: "An error occurred while trying to find a purchase/sale record with ID: " + id_sell
        });
    });
};

// Update an existing purchase/sale record by its ID.
exports.updateBuy_Sell = (req, res) => {
    const id_sell = req.params.id_sell; // Get the purchase/sale record ID from the request parameters.

    Buy_Sell.update(req.body, {
        where: { id_sell: id_sell }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "The purchase/sale record was updated."
            });
        } else {
            res.send({
                message: `Could not update the purchase/sale record with ID: ${id_sell}.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "An error occurred while trying to update the purchase/sale record with ID: " + id_sell
        });
    });
};

// Delete a purchase/sale record by its ID.
exports.deleteBuy_SellId = (req, res) => {
    const id_sell = req.params.id_sell; // Get the purchase/sale record ID from the request parameters.

    Buy_Sell.destroy({
        where: { id_sell: id_sell }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "The purchase/sale record was successfully deleted."
            });
        } else {
            res.send({
                message: `Could not delete the purchase/sale record with ID: ${id_sell}.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "An error occurred while trying to delete the purchase/sale record with ID: " + id_sell
        });
    });
};

// Delete all purchase/sale records.
exports.deleteAllBuy_Sell = (req, res) => {
    Buy_Sell.destroy({
        where: {},
        truncate: false
    }).then(nums => {
        res.send({
            message: `${nums} purchase/sale records were successfully deleted!`
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while trying to delete all purchase/sale records."
        });
    });
};


/*
const db = require("../models");
const Buy_Sell = db.Buy_Sell;
const Op = db.Sequelize.Op;

exports.createBuy_Sell = (req, res) => {
    if (!req.body.total) {
        res.status(400).send({
            message: "O campo total não pode estar vazio!"
        });
        return;
    }

    const buy_sell = {
        total: req.body.total,
        pay_date: req.body.pay_date,
        sell_date: req.body.sell_date,
        discount: req.body.discount,
        id_client: req.body.id_client,
        id_sell: req.body.id_sell
    };

    Buy_Sell.create(buy_sell).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao tentar criar o compra/venda!"
        });
    });
};

exports.findAllBuy_Sell = (req, res) => {
    const pay_date = req.query.pay_date; //revisar esta constante...
    var condition = pay_date ? { pay_date: { [Op.like]: `%${pay_date}%` } } : null; // Para case insensitive, use o operador Op.iLike!

    Buy_Sell.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao tentar pesquisar as compras/vendas!"
        });
    });
};

exports.findOneBuy_SellId = (req, res) => {
    const id_sell = req.params.id_sell;

    Buy_Sell.findByPk(id_sell).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Não foi possível encontrar a compra/venda com o ID: ${id_sell}.`
            });
        };
    }).catch(err => {
        res.status(500).send({
            message: "Algum erro ocorreu ao tentar encontrar a compra/venda com o ID: " + id_sell
        });
    });
};

exports.updateBuy_Sell = (req, res) => {
    const id_sell = req.params.id_sell;

    Buy_Sell.update(req.body, {
        where: { id_sell: id_sell }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "a compra/venda foi atualizado!"
            });
        } else {
            res.send({
                message: `Não foi possivel atualizar a compra/venda com o ID: ${id_sell}.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algum erro ocorreu ao tentar atualizar a compra/venda com o ID: " + id_sell
        });
    });
};

exports.deleteBuy_SellId = (req, res) => {
    const id_sell = req.params.id_sell;

    Buy_Sell.destroy({
        where: { id_sell: id_sell }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "A compra/venda foi apagado com sucesso!"
            });
        } else {
            res.send({
                message: `Não foi possivel apagar a compra/venda com o ID: ${id_sell}.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algum erro ocorreu ao tentar apagar a compra/venda com o ID: " + id_sell
        });
    });
};

exports.deleteAllBuy_Sell = (req, res) => {
    Buy_Sell.destroy({
        where: {},
        truncate: false
    }).then(nums => {
        res.send({
            message: `${nums} compras/vendas foram apagados com sucesso!`
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao tentar apagar todos as compras/vendas!"
        });
    });
};
*/