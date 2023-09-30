// Import the Buy/Sell controller to handle Buy/Sell related requests.
module.exports = (app) => {
    const buy_sell = require("../controllers/buy_sell.controller.js");

    // Create a new Express Router instance.
    var router = require("express").Router();

    // Define routes for Buy/Sell related operations.

    // Create a new Buy/Sell entry.
    router.post("/", buy_sell.createBuy_Sell);

    // Retrieve all Buy/Sell entries.
    router.get("/", buy_sell.findAllBuy_Sell);

    // Retrieve a Buy/Sell entry by its ID.
    router.get("/:id_buy_sell", buy_sell.findOneBuy_SellId);

    // Update a Buy/Sell entry by its ID.
    router.put("/:id_buy_sell", buy_sell.updateBuy_Sell);

    // Delete a Buy/Sell entry by its ID.
    router.delete("/:id_buy_sell", buy_sell.deleteBuy_SellId);

    // Delete all Buy/Sell entries.
    router.delete("/", buy_sell.deleteAllBuy_Sell);

    // Register the Buy/Sell routes under the '/api/buy_sell' URL path.
    app.use('/api/buy_sell', router);
};

  