const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);

// create a product
router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a post
router.delete("/:id", deleteProduct);

module.exports = router;
