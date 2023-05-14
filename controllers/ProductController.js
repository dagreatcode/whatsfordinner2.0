const router = require("express").Router();
const db = require("../models");

router.get("/api/all-products", (req, res) => {
  db.Product.find({})
    // .populate("user")
    .then((foundProducts) => {
      res.json(foundProducts);
    });
});
router.get("/api/all-products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

module.exports = router;