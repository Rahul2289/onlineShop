const Product = require("../model/products.js");

//get all products

const getAllProducts = async (req, res, next) => {
  let products;

  try {
    products = await Product.find();
  } catch (error) {
    console.log(error);
  }

  if (!products) {
    res.status(404).json({ msg: "no product found" });
  }

  res.status(200).json({ products });
};

//add the product

const addTheProduct = async (req, res) => {
  let product;

  const { name, description, price, image } = req.body;

  try {
    product = new Product({
      name,
      description,
      price,
      image,
    });

    await product.save();
  } catch (error) {
    console.log(error);
  }
  if (!product) {
    res.status(500).json({ msg: "unable to add product" });
  }
  res.status(200).json({ product });
};
module.exports = { getAllProducts, addTheProduct };
