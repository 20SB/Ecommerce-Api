const Product = require("../models/product");

module.exports.products = async function (req, res) {
    console.log("controller found");
    try {
        const foundProducts = await Product.find({});
        console.log("Products found:", foundProducts);
        res.send(foundProducts);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send(err);
    }
};

module.exports.create = async function (req, res) {
    try {
        const newProduct = new Product({
            name: req.body.name,
            quantity: req.body.quantity,
        });

        await newProduct.save();
        res.send("New product added successfully.");
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send(err);
    }
};

module.exports.delete = async function (req, res) {
    try {
        const result = await Product.deleteOne({ _id: req.params.productId });
        if (result.deletedCount === 0) {
            res.status(404).send({ message: "Product not found" });
        } else {
            res.send({ message: "Product deleted" });
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send(err);
    }
};
