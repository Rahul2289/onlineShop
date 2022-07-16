const express = require("express");

const router = express.Router();

const { getAllProducts, addTheProduct } = require("../controllers/products.js");

router.route("/").get(getAllProducts).post(addTheProduct);

module.exports = router;
