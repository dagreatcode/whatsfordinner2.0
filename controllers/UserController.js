const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
// TODO: Add routes to add images to mongoDB for user after sign in.

// Resource Driven API //

router.get("/user", (req, res) => {
  db.User.find({})
    // .populate("user")
    .then((foundUsers) => {
      res.json(foundUsers);
    });
});

module.exports = router;
