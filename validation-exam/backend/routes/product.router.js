const { Router } = require("express");

const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const upload = require("../utils/image.upload");

const productRoute = Router();


productRoute.get("/all", getProducts);
productRoute.get("/:productId", getProductById);

productRoute.post("/create", upload.single("img"), createProduct);

productRoute.patch("/:productId", updateProduct);
productRoute.delete("/:productId", deleteProduct);

module.exports = productRoute;