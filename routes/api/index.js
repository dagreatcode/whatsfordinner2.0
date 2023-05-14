const router = require("express").Router();
const bookRoutes = require("./books");
const productsRoutes = require("./products");

// Book routes
router.use("/books", bookRoutes);
router.use("/products", productsRoutes);

module.exports = router;
