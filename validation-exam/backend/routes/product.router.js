const { Router } = require("express");

const { decode } = require("../middleware/decode.jwt");
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
// const upload = require("../middleware/upload");

const productRoute = Router();


productRoute.get("/", getProducts);
productRoute.get("/:productId", getProductById);

// productRoute.post("/create", upload.single("img"), createProduct);

productRoute.patch("/:productId", decode, updateProduct);
productRoute.delete("/:productId", decode, deleteProduct);

module.exports = productRoute;