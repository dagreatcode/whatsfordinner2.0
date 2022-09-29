const router = require("express").Router();
const bookRoutes = require("./books");
// const userRoutes = require("./users");
// const productRoutes = require("./products");
// const recipeRoutes = require("./recipes");
// const authRoutes = require("./auth");

// Book routes
router.use("/books", bookRoutes);
// router.use("/users", userRoutes);
// router.use("/products", productRoutes);
// router.use("/recipes", recipeRoutes);
// router.use("/auth", authRoutes);

module.exports = router;
